function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const body = document.querySelector(".modal-body");
const form = document.getElementById("form");
const lastName = document.getElementById("lastname");
const firstName = document.getElementById("firstname");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkCondition = document.querySelector("checkbox-icon");
const checkBox1 = document.getElementById("checkbox1");
const radio = document.getElementById("locationField");
const btnSubmit = document.getElementById("btnSubmit");
const thanks = document.querySelector(".content-thanks");
const btnCloseThanks = document.getElementById("btnClose");
const btnSpanClose = document.getElementById("spanBtnClose");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.classList.toggle("active");
  };
// Close modal form 
function closeModal() {
  modalbg.classList.add("hidden");
};
// Close modal form with X
function closeModalX() {
  modalbg.classList.add("hidden");
};

// Event listener on different fields + validity functions
  firstName.addEventListener("change", function() {
    isValidFirstName();
  });

  lastName.addEventListener("change", function() {
    isValidLastName();
  });

  email.addEventListener("change", function() {
    isValidEmail();
  });

  birthDate.addEventListener("change", function() {
    isValidBirthDate();
  });

  quantity.addEventListener("change", function() {
    isValidQuantity();
  });

  checkBox1.addEventListener("change", function() {
    isValidCheckCondition();
  });

  radio.addEventListener("change", function() {
    isValidLocation();
  });

// Event listener + functions to close the modal
  btnSpanClose.addEventListener("click", function(e) {
    e.preventDefault();
    closeModalX();
  });
  
  btnCloseThanks.addEventListener("click", function(e) {
    e.preventDefault();
    closeModal();
  });
  
// Event listener of the submit button + function submitForm
  btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    submitForm();
   });

// Function that checks the fields entered before sending the form and displaying the thank you message
  function submitForm() {
    if(isValidFirstName() && isValidLastName() && isValidEmail() && isValidBirthDate() && isValidQuantity() && isValidCheckCondition() && isValidLocation()) {
      thanks.classList.remove("hidden");
      thanks.classList.add("show");
      btnSubmit.classList.add("hidden");
      return true;
    } else {
      alert("Oups on dirait que vous avez mal rempli le formulaire !");
      return false;
    };
  };

// Check the first name field with a regex and add an error or confirmation message
  function isValidFirstName() {
    const firstRegex = new RegExp(/^[a-zA-Z \-]{2,20}$/);
    const errorFirstName = document.getElementById("errorFirstName");
    const firstName = document.getElementById("firstname");

    if(firstRegex.test(firstName.value) == false) {
      errorFirstName.textContent = "Veuillez entrer au moin deux caractères qui ne soit que des lettres";
      errorFirstName.style.color = "red";
      return false;
    } else {
      errorFirstName.textContent = "Prénom validé";
      errorFirstName.style.color = "green";
      return true;
    };
  };

// Check the last name field with a regex and add an error or confirmation message
  function isValidLastName() {
    const lastRegex = new RegExp(/^[a-zA-Z \-]{2,20}$/);
    const errorLastName = document.getElementById("errorLastName");
    const lastName = document.getElementById("lastname");

    if(lastRegex.test(lastName.value) == false)  {
      errorLastName.textContent = "Veuillez entrer au moin deux caractères qui ne soit que des lettres";
      errorLastName.style.color = "red";
      return false;
    } else {
      errorLastName.textContent = "Nom validé";
      errorLastName.style.color = "green";
      return true;
    };
  };
  
// Check the email field with a regex and add an error or confirmation message
  function isValidEmail() {
    const email = document.getElementById('email');
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if(emailRegex.test(email.value) === false) {
      errorEmail.textContent = "Format incorrect";
      errorEmail.style.color = "red";
      return false;
    } else {
      errorEmail.textContent = "e-mail validé";
      errorEmail.style.color = "green";
      return true;
    };
  };

// check the birthdate field with a empty string and add an error or confirmation message
  function isValidBirthDate() {
    const birthDate = document.getElementById("birthdate");
    const errorBirthDate = document.getElementById("errorBirthDate");

    if(!birthDate.value == "") {
      errorBirthDate.textContent = "Date validé";
      errorBirthDate.style.color = "green";
      return true;
    } else {
      errorBirthDate.textContent = "Merci de renseigner votre de naissance";
      errorBirthDate.style.color= "red";
      return false;
    };   
  };

// Check the quantity field with a regex and add an error or confirmation message
    function isValidQuantity() {
      const errorQuantity = document.getElementById("errorQuantity");
      const quantity = document.getElementById("quantity");
      const quantityRegex = new RegExp(/^[1-9]{0,1}[0-9]$/);

      if(quantityRegex.test(quantity.value) === true) {
        errorQuantity.textContent = "Choix validé";
        errorQuantity.style.color = "green";
        return true;
        
      } else {
        errorQuantity.textContent = "Merci de renseigner un nombre entre 0 et 99";
        errorQuantity.style.color= "red";
        return false;
      };
    };

// Check the location field on checking if checked and add an error or confirmation message
    function isValidLocation() {
      const errorLocation = document.getElementById("errorLocation");
      const location = document.getElementsByTagName("location");

      if(location.checked == false) {
        errorLocation.textContent = "Vous devez choisir une ville";
        errorLocation.style.color = "red";
        return false;
      } else {
        errorLocation.textContent = "Choix de la ville validé";
        errorLocation.style.color = "green";
        return true;
      };
    };

// Check the CG field on checking if checked and add an error or confirmation message
    function isValidCheckCondition() {
      const checkBox1 = document.getElementById("checkbox1");
      const errorCheckbox = document.getElementById("errorCheckbox");

      if(checkBox1.checked == false) {
        errorCheckbox.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
        errorCheckbox.style.color = "red";
        return false;
      } else {
        errorCheckbox.textContent = "Vous avez acceptez les conditions d'utilisations";
        errorCheckbox.style.color = "green";
        return true;
      };
    };