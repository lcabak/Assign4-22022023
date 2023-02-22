const express = require('express');

router = new express.Router();

const inputName = [];

router.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Main page'});
})

router.post('/users', (req, res, next) => {
    inputName.push( { username: req.body.username} )

    res.render('users', {
        pageTitle: 'Main page',
        namePassed: inputName
    });
})

module.exports = router;
exports.inputName = inputName;

