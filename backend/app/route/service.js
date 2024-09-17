module.exports = (app) => {

    const service = require('../controller/service');

    // Получение всех услуг
    app.get('/api/services', service.findAll);

    // Получение услуги по id
    app.get('/api/service/:id', service.findById);

    // Получение услуги по названию
    app.get('/api/service/name/:name', service.findByName);

    // Получение услуги по id категории
    app.get('/api/services/typeId/:typeId', service.findByTypeId);
};