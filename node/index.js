const app = require('express')();
const stringArrayToHtml = require('./utils/stringArrayToHtml');
const util = require('util');
const bodyParser = require('body-parser');
const collectionNames = ['categories',
  'system.indexes',
  'customers',
  'employee-territories',
  'employees',
  'northwind',
  'order-details',
  'orders',
  'products',
  'regions',
  'shippers',
  'suppliers',
  'territories'];
const db = require('./utils/initDB')(collectionNames);
const PORT = 3000;

app.use(bodyParser.json({}));
app.use(bodyParser.raw({}));
app.use(bodyParser.urlencoded({ extended: true }));


collectionNames.forEach(function (collectionName) {
  console.log('getting collection ' + collectionName);

  app.get('/' + collectionName, function (req, res) {

    db[collectionName].find({}, function (err, docs) {
      res.json(docs);
    })
  })
})

app.get('/', function (req, res) {
  res.send(stringArrayToHtml(collectionNames));
})


app.listen(PORT, function () {
  console.log('app running on port: ' + PORT)
})