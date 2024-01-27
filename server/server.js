import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

// https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja
app.get('/chat', (req, res) => {
    fetch(`https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja`)
    .then(res => res.json())
    .then(data => res.send(data))
    //console.log(req)
})


app.listen(port, () => {
    console.log(`Server and App listening on port http://localhost:${port}`)
});

// node server.js
// npm start