// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error =  document.querySelector('small');
let form = document.querySelector('#formulaire');
let instructions = document.querySelector('#instructions');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);
let tries = 0;
let selectedNumber;

// Etape 6 - Créer la fonction vérifier
function check(nbr) {

    let instruction = document.createElement('div');

    if(nbr < randomNumber) {
        instruction.textContent = '#' + tries + ' (' + selectedNumber + ')' + ' C\'est plus !'
        instruction.className = 'instruction plus'
        instructions.prepend(instruction);
    } else if(nbr > randomNumber) {
        instruction.textContent = '#' + tries + ' (' + selectedNumber + ')' + ' C\'est moins !'
        instruction.className = 'instruction moins'
        instructions.prepend(instruction);
    } else {
        instruction.textContent = '#' + tries + ' (' + selectedNumber + ')' + ' Félicitation vous avez trouvé le juste prix !'
        instruction.className = 'instruction fini'
        instructions.prepend(instruction);
        input.disabled = 'true';
    }
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
})

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    } else {
        tries++;
        input.style.borderColor = 'silver';
        selectedNumber = input.value;
        input.value = '';
        check(selectedNumber);
    }
})

