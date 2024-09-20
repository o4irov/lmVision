module.exports = (app) => {

    const service_type = require('../controller/service_type');

    app.get('/api/service_types', service_type.findAll);

    app.get('/api/service_type/:id', service_type.findById);
};