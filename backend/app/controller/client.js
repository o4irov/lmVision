var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Client = db.client; // название модели смотреть в init-models.js
const { Sequelize } = require('sequelize');

// Получение всех товаров
exports.findAll = (req, res) => {
    Client.findAll()
        .then(objects => {
            // возврат найденных записей
            globalFunctions.sendResult(res, objects)
        }).catch(err => {
            // возврат найденной ошибки
            globalFunctions.sendError(res, err)
        });
};


// Получение данных товара по id
exports.findById = (req, res) => {
    Client.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};