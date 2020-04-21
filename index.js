
const mongoose = require('mongoose');
const packages = require('./package.json');

const server = 'mongodb://localhost:27017/';
const mongodb = 'api_sync';

mongoose.Promise = global.Promise;
mongoose.connect(server+mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, function(err){
  var admin = new mongoose.mongo.Admin(mongoose.connection.db);
  admin.buildInfo(function (err, info) {
    console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@ API Sync ['+packages.version+']: initializing cron...');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log('% Mongo Server: '+server);
    console.log('% Mongo DB: '+mongodb);
    console.log('% Mongo Version: '+info.version);
    console.log('% Mongoose Version: '+packages.dependencies.mongoose);
    console.log('% Cron Version: '+packages.dependencies.cron);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    if(err) {
      console.log("Error: ", err);
    } else {
      require('./cron.js')();
    }
  });
});
