const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

//Inject envirionment variables
//require('./config').setupConfig();

// dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 9090

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(bodyparser.json())
// set view engine

// load assets
app.use('/css', express.static(path.resolve(__dirname, "../assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "../assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "../assets/js")))

app.use(express.static(path.resolve('build')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const config = require('../webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));


// app.use('/static', express.static(path.join(__dirname, '../client/build//static')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
});
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});