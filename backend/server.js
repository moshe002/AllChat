import express from 'express';
import { Axios } from 'axios';

const app = express();
const port = 3001;

// https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja

app.listen(port, () => {
    console.log(`Server and App listening on port http://localhost:${port}`)
});

// node server.js