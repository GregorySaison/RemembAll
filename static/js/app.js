const app = {
    game: [], // Définition d'un conteneur destiné a stocker les bonnes réponses de l'utilisateur

    init: () => {
        app.checkInput();
    },
    
    checkInput: () => {
        // RECUPERATION DES ELEMENTS DU DOM
        let button = document.getElementById('button');
        let userInput = document.getElementById('searchbar'); 
        let cards = document.querySelectorAll('.main__card-content');

        button.addEventListener('click', (e) => {
            e.preventDefault();
            const answer = userInput.value.toLowerCase(); // Stockage de la réponse entrée par l'utilisateur
            console.log(answer);
    
            // VERIFICATION DE LA REPONSE DE L'UTILISATEUR
            cards.forEach((card) => { 
                if (card.textContent.includes(answer) && app.game.includes(answer) === false) {
                    card.style.display = 'block';
                    app.game.push(answer);
                }
    
                if (app.game.length === 151) { 
                    alert('Vous avez réussi !');
                }
            })
        })
    }
}

document.addEventListener("DOMContentLoaded", app.init);