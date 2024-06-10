import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

/* "/"로 처음 접근시 해당 내용 실행한다 */
app.get('/', (req, res) => {
    res.sendFile("/views/index.html", {root : __dirname});
});

app.get('/login', (req, res) => {
    req.setEncoding('utf-8');
});

app.listen(port, () => {
    console.log(`express server opened at port : ${port}`);
});