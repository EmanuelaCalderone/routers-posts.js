//importo la libreria Express
const express = require('express')

//creo la variabile router
const router = express.Router();

//importo posts_items
const items = require("../items/posts_items")

// rotte di CRUD dei post

// index
router.get('/', function (req, res) {
    //restituisco i post in formato json (bonus)
    res.json(items);
});

// show
router.get('/:id', function (req, res) {
     //restituisco il singolo post in formato json (bonus)
    res.json(items[req.params.id]);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send(`Modifica totale del post con ID: ${req.params.id}`);
});

// modify
router.patch('/:id', function (req, res) {
    res.send(`Modifica parziale del post con ID: ${req.params.id}`);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send(`Cancellazione post con ID: ${req.params.id}`);
});

//esporto il modulo del router
module.exports = router;

