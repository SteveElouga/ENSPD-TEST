function checkInput() {
    var inputField = document.querySelector('.monInput');
    var label = document.getElementById('labelMonInput');

    if (inputField.value.trim() !== '') {
        label.classList.add('hide-label');
    } else {
        label.classList.remove('hide-label');
    }
}

const emailInput = document.querySelectorAll('.email');
const errorMessage = document.createElement('div');

emailInput.forEach(function (element) {
    function validateEmail() {
        const emailValue = element.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(emailValue)) {

            console.log('Email valide', element.value);
            errorMessage.textContent = '';
        } else {
            // emailInput.value = ''
            console.log('Email non valide', element.value);

            // Crée un élément pour le message d'erreur

            errorMessage.textContent = 'Champ invalide. Veuillez entrer une valeur valide.';
            errorMessage.style.color = 'red';
            errorMessage.style.position = 'absolute';
            errorMessage.style.fontSize = '12px';
            errorMessage.style.bottom = '-40px';

            // Ajoute le message d'erreur juste en dessous de l'input
            element.parentNode.appendChild(errorMessage);
        }
    }

    // Ajoute un événement pour déclencher la validation
    element.addEventListener('blur', validateEmail);
})





const matricule = document.getElementById('matricule');

function validerMatricule() {

    const matriculeValue = matricule.value.trim();

    if (matriculeValue.length === 8 && /^[a-zA-Z0-9]+$/.test(matriculeValue) && matriculeValue.charAt(2).toLowerCase() === 'g') {
        console.log('matricule valide', matricule.value + ' ' + document.getElementById('filiere').value);
        errorMessage.textContent = '';
    }
    else {
        // emailInput.value = ''
        console.log('matricule non valide', matricule.value);

        // Crée un élément pour le message d'erreur

        errorMessage.textContent = 'Champ invalide. Veuillez entrer une valeur valide.';
        errorMessage.style.color = 'red';
        errorMessage.style.position = 'absolute';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.bottom = '-40px';

        // Ajoute le message d'erreur juste en dessous de l'input
        matricule.parentNode.appendChild(errorMessage);
    }
}

matricule.addEventListener('blur', validerMatricule);

const mdp = document.querySelectorAll('.mdp');

mdp.forEach(function (element) {
    function validerMdp() {
        const mdpValue = element.value.trim();

        if (mdpValue.length > 8 && /[A-Z]/.test(mdpValue) && /[a-z]/.test(mdpValue) && /\d/.test(mdpValue) && mdpValue != '') {
            console.log('mdp valide', element.value);
            errorMessage.textContent = '';
        }
        else {
            // emailInput.value = ''
            console.log('mdp non valide', element.value);

            // Crée un élément pour le message d'erreur

            errorMessage.textContent = 'Champ invalide. Veuillez entrer une valeur valide.';
            errorMessage.style.color = 'red';
            errorMessage.style.position = 'absolute';
            errorMessage.style.fontSize = '12px';
            errorMessage.style.bottom = '-40px';

            // Ajoute le message d'erreur juste en dessous de l'input
            element.parentNode.appendChild(errorMessage);
        }
    }

    element.addEventListener('blur', validerMdp);
})

