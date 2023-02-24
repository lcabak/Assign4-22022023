const express = require('express');
const fs = require('fs');

router = new express.Router();

const inputName = [];


router.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Main page'});
})

router.post('/users', (req, res, next) => {
    
    inputName.push( { username: req.body.username} )

    fs.writeFile("../Assign4/data/inputName.txt", JSON.stringify(inputName), (err) => {
        if(err) 
            console.log(err);
        else {
            console.log("File written successfully");
        }
    });

    res.render('users', {
        pageTitle: 'Main page',
        namePassed: inputName
    });

})


module.exports = { router, inputName };


