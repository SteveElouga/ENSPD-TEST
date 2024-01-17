const contain = document.getElementById('contain')
const containe = document.getElementById('containe')
const right = document.getElementById('right')
const left = document.getElementById('left')

right.addEventListener('click', function () {
    console.log("click detecte")
    contain.style.transform = "translate(-1000%)";
    containe.style.transform = "translate(0%)";
    containe.style.opacity = "1"
});

left.addEventListener('click', function () {
    console.log("click detecte")
    contain.style.transform = "translate(0)";
    containe.style.transform = "translate(1000%)";
    containe.style.opacity = "1"
});

const filiere = document.getElementById('filiere')

// console.log(document.cookie + ' ' + filiere.value)

// Fonction pour récupérer la valeur d'un cookie par son nom

function obtenirValeurCookie(nomCookie) {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(nomCookie + '=')) {
            // Récupérez la valeur depuis le cookie
            return decodeURIComponent(cookie.substring(nomCookie.length + 1));
        }
    }

    // Si le cookie n'est pas trouvé, renvoyer null ou une valeur par défaut
    return null;
}

// Utilisation pour récupérer la valeur du cookie nommé "monCookie"
var valeurMonCookie = obtenirValeurCookie('dataValue');
var valeurMonCookieNiveau = obtenirValeurCookie('dataValueNiveau');
var valeurMonCookieCycle = obtenirValeurCookie('cycle')
filiere.value = valeurMonCookie
// Utilisez la valeur récupérée comme nécessaire
console.log(valeurMonCookie);
console.log(document.cookie)
console.log(filiere.value)

const niveau = document.getElementById('cycle1')
const niveau2 = document.getElementById('cycle2')



if (valeurMonCookieCycle === "master") {
    niveau.disabled = true
}
else if (valeurMonCookieCycle === "licence") {
    niveau2.disabled = true
}
else {
 console.log("Tous les niveaux sont disponible")
}





