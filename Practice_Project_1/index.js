import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.write("Hello World");
    res.end();
});

app.listen(port, () => {
    console.log(`express server opened at port : ${port}`);
});