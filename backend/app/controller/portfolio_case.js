var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Portfolio_case = db.portfolioCase; // название модели смотреть в init-models.js
const { Sequelize } = require('sequelize');

exports.findAll = (req, res) => {
    Portfolio_case.findAll()
        .then(objects => {
            // возврат найденных записей
            globalFunctions.sendResult(res, objects)
        }).catch(err => {
            // возврат найденной ошибки
            globalFunctions.sendError(res, err)
        });
};

exports.findById = (req, res) => {
    Portfolio_case.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};