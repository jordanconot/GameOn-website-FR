function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const body = document.querySelector('.modal-body');
const form = document.getElementById('form');
const lastName = document.getElementById('lastname');
const firstName = document.getElementById('firstname');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkCondition = document.querySelector('checkbox-icon');
const checkBox1 = document.getElementById('checkbox1');
const radio = document.getElementById('locationField');
const btnSubmit = document.getElementById('btnSubmit');
const thanks = document.querySelector('.content-thanks');
const btnCloseThanks = document.getElementById('btnClose');
const btnClose = document.querySelectorAll('.close-modal');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
btnClose.forEach((btn) => btn.addEventListener('click', closeModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}
// Close modal form
function closeModal() {
    modalbg.style.display = 'none';
    thanks.classList.remove('show');
    thanks.classList.add('hidden');
    btnSubmit.classList.remove('hidden');
    btnSubmit.classList.add('show');
}

// Event listener on different fields + validity functions
firstName.addEventListener('change', function () {
    isValidFirstName();
});

lastName.addEventListener('change', function () {
    isValidLastName();
});

email.addEventListener('change', function () {
    isValidEmail();
});

birthDate.addEventListener('change', function () {
    isValidBirthDate();
});

quantity.addEventListener('change', function () {
    isValidQuantity();
});

checkBox1.addEventListener('change', function () {
    isValidCheckCondition();
});

radio.addEventListener('change', function () {
    isValidLocation();
});

// Event listener of the submit button + function submitForm
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    submitForm();
});

// Function that checks the fields entered before sending the form and displaying the thank you message
function submitForm() {
    if (
        isValidFirstName() &&
        isValidLastName() &&
        isValidEmail() &&
        isValidBirthDate() &&
        isValidQuantity() &&
        isValidCheckCondition() &&
        isValidLocation()
    ) {
        thanks.classList.remove('hidden');
        thanks.classList.add('show');
        btnSubmit.classList.add('hidden');
        form.reset();
        return true;
    } else {
        return false;
    }
}

// Check the first name field with a regex and add an error or confirmation message
function isValidFirstName() {
    const firstRegex = new RegExp(/^[a-zA-Z \-]{2,20}$/);
    const errorFirstName = document.getElementById('errorFirstName');
    const firstName = document.getElementById('firstname');

    if (firstRegex.test(firstName.value) == false) {
        errorFirstName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
        errorFirstName.style.color = '#FF4E60';
        firstName.style.border = '2px solid #FF4E60';
        return false;
    } else {
        firstName.style.border = 'none';
        errorFirstName.textContent = '';
        return true;
    }
}

// Check the last name field with a regex and add an error or confirmation message
function isValidLastName() {
    const lastRegex = new RegExp(/^[a-zA-Z \-]{2,20}$/);
    const errorLastName = document.getElementById('errorLastName');
    const lastName = document.getElementById('lastname');

    if (lastRegex.test(lastName.value) == false) {
        errorLastName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
        errorLastName.style.color = '#FF4E60';
        lastName.style.border = '2px solid #FF4E60';
        return false;
    } else {
        lastName.style.border = 'none';
        errorLastName.textContent = '';
        return true;
    }
}

// Check the email field with a regex and add an error or confirmation message
function isValidEmail() {
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,20}$/);

    if (emailRegex.test(email.value) === false) {
        errorEmail.textContent = 'Format incorrect';
        errorEmail.style.color = '#FF4E60';
        email.style.border = '2px solid #FF4E60';
        return false;
    } else {
        email.style.border = 'none';
        errorEmail.textContent = '';
        return true;
    }
}

// check the birthdate field with a empty string and add an error or confirmation message
function isValidBirthDate() {
    const birthDate = document.getElementById('birthdate');
    const errorBirthDate = document.getElementById('errorBirthDate');

    if (!birthDate.value == '') {
        birthDate.style.border = 'none';
        errorBirthDate.textContent = '';
        return true;
    } else {
        errorBirthDate.textContent = 'Vous devez entrer votre date de naissance';
        errorBirthDate.style.color = '#FF4E60';
        birthDate.style.border = '2px solid #FF4E60';
        return false;
    }
}

// Check the quantity field with a regex and add an error or confirmation message
function isValidQuantity() {
    const errorQuantity = document.getElementById('errorQuantity');
    const quantity = document.getElementById('quantity');
    const quantityRegex = new RegExp(/^[1-9]{0,1}[0-9]$/);

    if (quantityRegex.test(quantity.value) === true) {
        quantity.style.border = 'none';
        errorQuantity.textContent = '';
        return true;
    } else {
        errorQuantity.textContent = 'Merci de renseigner un nombre entre 0 et 99';
        errorQuantity.style.color = '#FF4E60';
        quantity.style.border = '2px solid #FF4E60';
        return false;
    }
}

// Check the location field on checking if checked and add an error or confirmation message
function isValidLocation() {
    const errorLocation = document.getElementById('errorLocation');
    const locationArray = document.getElementsByName('location');
    if (
        !locationArray[0].checked &&
        !locationArray[1].checked &&
        !locationArray[2].checked &&
        !locationArray[3].checked &&
        !locationArray[4].checked &&
        !locationArray[5].checked
    ) {
        errorLocation.textContent = 'Vous devez choisir une option';
        errorLocation.style.color = '#FF4E60';
        console.log(errorLocation);
        return false;
    } else {
        errorLocation.textContent = '';
        return true;
    }
}

// Check the CG field on checking if checked and add an error or confirmation message
function isValidCheckCondition() {
    const checkBox1 = document.getElementById('checkbox1');
    const errorCheckbox = document.getElementById('errorCheckbox');

    if (checkBox1.checked == false) {
        errorCheckbox.textContent = 'Vous devez vérifier que vous acceptez les termes et conditions';
        errorCheckbox.style.color = '#FF4E60';
        return false;
    } else {
        errorCheckbox.textContent = "";
        return true;
    }
}
