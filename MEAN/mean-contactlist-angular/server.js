var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var Object_ID = mongodb.Object_ID;

var CONTACTS_COLLECTION = 'contacts';

var app = express();
app.use(bodyParser.json());

// Variable para usar la conexión globalmente
var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mondodb://localhost:27017/test', function(err, client) {
    if(err) {
        console.log(err);
        process.exit(1);
    }

    // Save database
    db = client.db();
    console.log('Database connection ready');

    // Sólo cuando esté la conexión hecha, se crea
    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log('App now running on port', port);
    })
});

// CONTACTS API
function handleError(res, reason, message, code) {
    console.log('Error', reason);
    res.status(code || 500).json({'error': message});
}

app.get('/api/contacts', (req, res) => {
    db.collection(CONTACTS_COLLECTION).find({}).toArray((err, docs) => {
        if(err) {
            handleError(res, err.message, 'Failed to get contacts');
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post('/api/contacts', (req, res) => {
    var newContact = req.body;

    if(!req.body.name) {
        handleError(res, 'Invalid user input', 'Must provide a name.', 400);
    }

    db.collection(CONTACTS_COLLECTION).insertOne(newContact, (err, doc) => {
        if(err) {
            handleError(res, err.message, 'Failed to create new contact.');
        } else {
            res.status(201).json(doc.ops[0]);
        }
    })
});

app.get('/api/contacts/:id', (req, res) => {

});

app.put('/api/contacts/:id', (req, res) => {

});

app.delete('/api/contacts/:id', (req, res) => {

});