module.exports = (app) => {

    const product_type = require('../controller/product_type');

    app.get('/api/product_types', product_type.findAll);

    app.get('/api/product_type/:id', product_type.findById);
};