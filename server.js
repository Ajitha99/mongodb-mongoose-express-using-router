const express = require('express');

const routes = require('./routes');

const db = require('./db');

const logger = require('morgan');//debugging tool

const PORT = process.env.PORT || 3000;

const app = express();

//They are parsing our data that we send out
app.use(express.json());
app.use(express.urlencoded({extended: false}));//parses express


app.use(logger('dev'));

app.use('/api' , routes);

db.on('error', console.error.bind(console,'MongoDB Connection error: '));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
