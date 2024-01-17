document.addEventListener("DOMContentLoaded", function() {
    // Attends que le DOM soit chargé

    // Affiche le spinner
    document.querySelector('.spinner-container').style.display = 'flex';

    window.addEventListener('load', function() {
        // Attends que tout le contenu (images, styles, etc.) soit chargé

        // Cache le spinner une fois que tout est chargé
        document.querySelector('.spinner-container').style.display = 'none';
    });
});



document.getElementById('connexion').addEventListener('click', function() {
    window.location.href = 'connexion.html';
});

document.getElementById('inscription').addEventListener('click', function() {
    window.location.href = 'inscription.html';
});

document.getElementById('licence').addEventListener('click', function() {
    window.location.href = 'licence.html';
});


document.getElementById('master').addEventListener('click', function() {
    window.location.href = 'master.html';
});












