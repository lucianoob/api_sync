const express = require('express');
const expressGraphQL = require('express-graphql');
const packages = require('./package.json');

const schema = require('./schema');

var app = express();

app.use('/', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000);

console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('@ API Sync ['+packages.version+']: initializing server...');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
