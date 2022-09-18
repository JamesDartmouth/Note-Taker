const express = require('express');
const logger = require('morgan');
// const path = require('path');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3001, () => console.log('App runnning on http://localhost:3001/'));


//Require routes file
// require('./routes/routes')(app);
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// Setup listener

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });  