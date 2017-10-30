'use strict';

const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');

const app  = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(PORT, () => { console.log('Server running on port', PORT)});
