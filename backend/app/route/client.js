module.exports = (app) => {

    const client = require('../controller/client');

    app.get('/api/clients', client.findAll);

    app.get('/api/client/:id', client.findById);
};