// const express = require('express');
const path = require('path');
const html = require('express').Router();


// GET 'notes', returns notes.html file.
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// GET '*', returns index.html file.
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = html;