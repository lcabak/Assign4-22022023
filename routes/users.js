const express = require('express');

const indexData = require('./index');

const test = [];

console.log(indexData.inputName)

router = express.Router();

router.get('/users', (req, res, next) => {
    console.log('Get')
    res.render('users', {pageTitle: 'Users list', namePassed: indexData.inputName});
})

router.post('/', (req, res, next) => {
    console.log('Post')
    res.render('users', {pageTitle: 'Users list'});
})



module.exports = router;