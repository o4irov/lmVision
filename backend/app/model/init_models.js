const Product = require('./product');
const Service = require('./service');
const ServiceType = require('./service_type');
const ProductType = require('./product_type');
const PortfolioCase = require('./portfolio_case');
const Client = require('./client');
const { DataTypes } = require('sequelize');

function initModels(sequelize) {
    var product = Product(sequelize, DataTypes);
    var service = Service(sequelize, DataTypes);
    var serviceType = ServiceType(sequelize, DataTypes);
    var productType = ProductType(sequelize, DataTypes);
    var portfolioCase = PortfolioCase(sequelize, DataTypes);
    var client = Client(sequelize, DataTypes);

    product.belongsTo(productType, { foreignKey: 'typeId', as: 'productType' });
    service.belongsTo(serviceType, { foreignKey: 'typeId', as: 'serviceType' });

    productType.hasMany(product, { foreignKey: 'typeId' });
    serviceType.hasMany(service, { foreignKey: 'typeId' });

    return {
        product,
        service,
        serviceType,
        productType,
        portfolioCase,
        client,
    }
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
