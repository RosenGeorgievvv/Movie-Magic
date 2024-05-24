const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.listen(PORT);