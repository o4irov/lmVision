var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Product = db.product; // название модели смотреть в init-models.js
var ProductType = db.productType;
const { Sequelize } = require('sequelize');

// Получение всех товаров
exports.findAll = (req, res) => {
    Product.findAll({
        include: [{
            model: ProductType,
            as: 'productType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('productType.name'), 'typeName']
            ],
        }
    })
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
    Product.findByPk(req.params.id, {
        include: [{
            model: ProductType,
            as: 'productType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('productType.name'), 'typeName']
            ],
        }
    })
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Получение данных товара по названию
exports.findByName = (req, res) => {
    Product.findAll({
        where: {
            name: req.params.name
        },
        include: [{
            model: ProductType,
            as: 'productType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('productType.name'), 'typeName']
            ],
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Получение данных товаров по typeId
exports.findByTypeId = (req, res) => {
    Product.findAll({
        where: {
            typeId: req.params.typeId
        },
        include: [{
            model: ProductType,
            as: 'productType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('productType.name'), 'typeName']
            ],
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};