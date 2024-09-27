let express = require('express');
let bodyParser = require('body-parser');
let db = require('./app/config/db.config.js');
let cors = require('cors');
let morgan = require('morgan');
let port = 8000;
var app = express();


//парсинг application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(morgan('combined'));

db.sequelize.sync({ force: false });

var corsOptions = {
    credentials: true, // разрешаем обрабатывать запросы
    optionSuccessStatus: 200 // при успешной обработке запроса будет возвращён статус 200
}

app.use(cors(corsOptions));

var product = require('./app/route/product.js');
product(app);

var service = require('./app/route/service.js');
service(app);

var client = require('./app/route/client.js');
client(app);

var portfolio_case = require('./app/route/portfolio_case.js');
portfolio_case(app);

var product_type = require('./app/route/product_type.js');
product_type(app);

var service_type = require('./app/route/service_type.js');
service_type(app);

app.listen(port)
console.log("Listening on port " + port);

module.exports = app;