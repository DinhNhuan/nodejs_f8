const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes');

// connect to database   
const db = require('./config/db');
db.connect();

const app = express();
const port = 3000;

// static 
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', exphbs({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));