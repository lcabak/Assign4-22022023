
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const express = require('express');
const path = require('path');

var test = [];

const indexData = require('./routes/index')
const usersData = require('./routes/users')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));

app.use(indexData.router);
app.use(usersData);

console.log("He1i")
console.log(indexData.inputName)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Error 404'});
})

app.listen(3000);