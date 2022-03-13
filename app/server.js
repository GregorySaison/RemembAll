// IMPORTATION DES MODULES
const express = require('express');
const router = require('./router');
const path = require('path');

// CREATION ET PARAMETRAGE DU SERVEUR
const server = express();
const port = process.env.PORT || 3000;
server.set('view engine', 'ejs');

// DEFINITION DES LOCALISATION DE RECHERCHE DU SERVEUR
server.set('views', path.resolve(__dirname, '../views'));
server.use(express.static('static'));
server.use(router);

// MISE EN ROUTE DU SERVEUR SUR L'ECOUTE DES REQUETES
server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
})