const express = require('express');
// const fs = require('fs');
const logger = require('morgan');
// const path = require('path');

const app = express();

const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");


app.use ('/api', apiRoute);
app.use ('/', htmlRoute);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
}); 

// app.listen(3001, () => console.log('App runnning on http://localhost:3001/'));

