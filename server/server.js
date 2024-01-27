import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 3001;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173/",
        methods: ["GET", "POST"],
    }
});

app.use(cors());

// https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja
app.get('/chat', (req, res) => {
    fetch(`https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja`)
    .then(res => res.json())
    .then(data => res.send(data))
});

io.on("connection", (socket) => {
    socket.on("chosen_language", (data) => {
        console.log(data);
    })
})

server.listen(port, () => {
    console.log(`Server and App listening on port http://localhost:${port}`)
});

// node server.js
// npm start