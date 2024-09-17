module.exports = (app) => {

    const service_type = require('../controller/service_type');

    // Получение всех услуг
    app.get('/api/service_types', service_type.findAll);

    // Получение услуги по id
    app.get('/api/service_type/:id', service_type.findById);
};