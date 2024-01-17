// Ajout d'un événement à chaque élément ayant la classe 'annee' 
const listannee = document.querySelectorAll('.annee');

listannee.forEach(function(element) {
    element.addEventListener('click', function() {
        window.location.href = 'encours.html';
    });
});

// Calcul de la date pour la création de cookies
let date = new Date(Date.now() + 86400000); // 86400000ms = 1 jour
date = date.toUTCString();

// Fonction pour définir un cookie avec la valeur du cycle
function cycle(cycle) {
    var valeurData = cycle.getAttribute('data-value');
    document.cookie = 'cycle=' + valeurData + '; path=/; expires=' + date;
    console.log(document.cookie);
}

// Fonction pour définir un cookie avec la valeur de l'axe
function selectDataValue(axe) {
    var valeurData = axe.getAttribute('data-value');
    document.cookie = 'dataValue=' + valeurData + '; path=/; expires=' + date;
    console.log(document.cookie);
}

// Autres fonctions potentielles
// function selectDataValues(axe) {
//     var valeurData = axe.getAttribute('data-value');
//     document.cookie = 'dataValueNiveau=' + valeurData + '; path=/; expires=' + date;
//     console.log(document.cookie);
// }

// dataValue=glo

