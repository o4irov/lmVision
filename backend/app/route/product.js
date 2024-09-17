module.exports = (app) => {

    const product = require('../controller/product');

    // Получение всех товаров
    app.get('/api/products', product.findAll);

    // Получение товара по id
    app.get('/api/product/:id', product.findById);

    // Получение товара по названию
    app.get('/api/products/name/:name', product.findByName);

    // Получение товаров по id категории
    app.get('/api/products/typeId/:typeId', product.findByTypeId);

    // app.post('/api/updateProduct/:id', user.update);

    // app.post('/api/deleteProduct/:id', [authJwt.verifyToken], user.delete);
};