module.exports = (app) => {

    const portfolio_case = require('../controller/portfolio_case');

    app.get('/api/portfolio_cases', portfolio_case.findAll);

    app.get('/api/portfolio_case/:id', portfolio_case.findById);
};