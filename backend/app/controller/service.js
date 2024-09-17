var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Service = db.service; // название модели смотреть в init-models.js
var ServiceType = db.serviceType;
const { Sequelize } = require('sequelize');

exports.findAll = (req, res) => {
    Service.findAll({
        include: [{
            model: ServiceType,
            as: 'serviceType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('serviceType.name'), 'typeName']
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


exports.findById = (req, res) => {
    Service.findByPk(req.params.id,
        {
            include: [{
                model: ServiceType,
                as: 'serviceType',
                attributes: [],
            }],
            attributes: {
                include: [
                    [Sequelize.col('serviceType.name'), 'typeName']
                ],
            }
        }
    )
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findByName = (req, res) => {
    Service.findAll({
        where: {
            name: req.params.name
        },
        include: [{
            model: ServiceType,
            as: 'serviceType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('serviceType.name'), 'typeName']
            ],
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.findByTypeId = (req, res) => {
    Service.findAll({
        where: {
            typeId: req.params.typeId
        },
        include: [{
            model: ServiceType,
            as: 'serviceType',
            attributes: [],
        }],
        attributes: {
            include: [
                [Sequelize.col('serviceType.name'), 'typeName']
            ],
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};