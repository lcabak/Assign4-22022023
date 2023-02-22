const express = require('express');

const indexData = require('./index');

console.log(indexData.inputName)

router = express.Router();

router.get('/users', (req, res, next) => {
    console.log('Get')
    res.render('users', {pageTitle: 'Users list'});
})

router.post('/', (req, res, next) => {
    console.log('Post')
    res.render('users', {pageTitle: 'Users list'});
})



module.exports = router;