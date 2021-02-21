require('dotenv').config();

const mongoose = require('mongoose');
const packages = require('./package.json');

const server = (process.env.DB_USER ? process.env.DB_USER+':'+process.env.DB_PASS+'@' : '')+process.env.DB_HOST+(process.env.DB_PORT ? ':'+process.env.DB_PORT : '');
const mongodb = process.env.DB_NAME;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI+'://'+server+'/'+mongodb+'?'+process.env.MONGODB_VARS, { 
  useNewUrlParser: process.env.MONGODB_USENEWURLPARSER === '1', 
  useUnifiedTopology: process.env.MONGODB_USEUNIFIEDTOPOLOGY === '1', 
  useFindAndModify: process.env.MONGODB_USEFINDANDMODIFY === '1', 
  useCreateIndex: process.env.MONGODB_USECREATEINDEX === '1' 
}, function(err){
  if(err) {
    console.log('Error: ', err);
    process.exit(1);
  }
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
      process.exit(1);
    } else {
      require('./cron.js')();
    }
  });
});

require('./server.js')