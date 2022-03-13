// IMPORTATION DES DONNEES DANS LE FICHIER JSON DU PROJET
const pokeBase = require('./../../pokebase.json');

// CREATION DU CONTROLLER DE RENDU
const mainController = {
    homepage: (__, res) => {
        res.render('home', { pokeBase }); // Utilisation des données comprises dans le fichier JSON du projet
    }
}

// MISE EN DISPONIBILITE DU FICHIER 
module.exports = mainController;