const path = require("path");
// const express = require('express');

const startScriptData = require(path.join(__dirname, '../','public','script', 'start-script'));

exports.startGamePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'index.html'));
    // next();
};



