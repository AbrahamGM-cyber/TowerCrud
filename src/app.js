const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const cookieParser = require('cookie-parser')

const app = express();

const CustomerRoutes = require('./routes/index');
const { urlencoded } = require('express');

// view engine setup
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(myconnection(mysql, {
    host: 'bes35paag5zng0cgi8dj-mysql.services.clever-cloud.com',
    user: 'u7h0g2wk11qs9br1',
    password: 'XNVB86DP5etnIj0Pe7j2',
    port: 3306,
    database: 'bes35paag5zng0cgi8dj'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', CustomerRoutes);


//Stactis files
app.use(express.static(path.join(__dirname, 'public')));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});




module.exports = app;
