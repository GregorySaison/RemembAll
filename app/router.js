// IMPORTATION DES MODULES
const express = require('express');
const router = express.Router();
const mainController = require('./controller/mainController');

// DEFINITION DES ROUTES DU PROJET
router.get('/', mainController.homepage);

// MISE EN DISPONIBILITE DU FICHIER 
module.exports = router;