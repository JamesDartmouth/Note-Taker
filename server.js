const express = require('express');
const logger = require('morgan');
// const path = require('path');

const app = express();

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3001, () => console.log('App runnning on http://localhost:3001/'));

