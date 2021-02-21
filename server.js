const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const packages = require('./package.json');

const schema = require('./schema');
const PORT = process.env.NODE_PORT || 8080;

var app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT);

console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('@ API Sync ['+packages.version+']: initializing server...');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
