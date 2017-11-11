var mongojs = require('mongojs');

var host = 'mongo';
var port = 27017;

console.log(host);
console.log(port);

var connectionString = "mongodb://" + host + ":" + port + "/northwind";
console.log(connectionString);

module.exports = function initDBConnection(collectionNames) {
    return mongojs(connectionString, collectionNames);
};
