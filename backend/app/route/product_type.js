module.exports = (app) => {

    const product_type = require('../controller/product_type');

    // Получение всех услуг
    app.get('/api/product_types', product_type.findAll);

    // Получение услуги по id
    app.get('/api/product_type/:id', product_type.findById);
};