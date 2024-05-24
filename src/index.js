const express = require('express');

const {configHbs} = require('./config/hbs');
const { configExpress } = require('./config/express');
const PORT = process.env.PORT || 3000;
const app = express();

configHbs(app);
configExpress(app);

app.listen(PORT);