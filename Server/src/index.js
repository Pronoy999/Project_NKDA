#!/usr/bin/env node
const app = {};
const server = require('./Helpers/server');
app.init = () => {
    server.init();
};
app.init();
module.exports = app;