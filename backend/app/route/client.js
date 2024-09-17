module.exports = (app) => {

    const client = require('../controller/client');

    // Получение всех услуг
    app.get('/api/clients', client.findAll);

    // Получение услуги по id
    app.get('/api/client/:id', client.findById);
};