import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const PORT = 3001;
const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

app.use(cors());

let translationData = {};

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Socket.io server.</h1>');
});

// https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja

io.on("connection", (socket) => {
    //console.log("Client connected:", socket.id);

    socket.on("chosen_language", (data) => {
        console.log(data);
        translationData = data;
    })

    socket.on("translated_message", (data) => {
        console.log(data);
        socket.broadcast.emit("received_message", data.translatedMessage);
    })
});

// fetches from api
app.get('/chat', (req, res) => {
    console.log(translationData);
    const { message, language } = translationData;

    if (!message || !language) {
        return res.status(400).send({ error: 'Bad Request' });
    }

    fetch(`https://655.mtis.workers.dev/translate?text=${message}&source_lang=en&target_lang=${language}`)
    .then(response => response.json())
    .then(data => res.send(data))
});


httpServer.listen(PORT, () => {
    console.log(`Server and App listening on port http://localhost:${PORT}`)
});
// node server.js
// npm start