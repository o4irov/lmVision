module.exports = (app) => {

    const portfolio_case = require('../controller/portfolio_case');

    // Получение всех услуг
    app.get('/api/portfolio_cases', portfolio_case.findAll);

    // Получение услуги по id
    app.get('/api/portfolio_case/:id', portfolio_case.findById);
};