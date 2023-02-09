const express = require('express');

// all routers for notes

const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;