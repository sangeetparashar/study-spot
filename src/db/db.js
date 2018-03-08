const mongoose = require('mongoose');
const mongoDB = 'mongodb://admin:YDAUDXSAYQKTKTSD@sl-us-south-1-portal.15.dblayer.com:36486,sl-us-south-1-portal.17.dblayer.com:36486/compose?authSource=admin&ssl=true';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
