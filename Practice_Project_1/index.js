import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.write("Hello World");
    res.write("<br>this is a test writing to see if it is displayed on the next line");
    res.end();
});

app.listen(port, () => {
    console.log(`express server opened at port : ${port}`);
});