const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use ('/api', api);
app.use ('/', html);



app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
}); 



