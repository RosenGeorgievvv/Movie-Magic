const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.urlencoded());

const hbs = handlebars.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');