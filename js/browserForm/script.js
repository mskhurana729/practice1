// we want to validate the form fields
//we want live inline validation which means add event listener on input
//we want validation on whenever submit button is pressed

const form = document.querySelector('form');
const formInputs = document.querySelectorAll('.formInput');
console.log(formInputs);
form.addEventListener('submit', (event) => {
  formInputs.forEach((formInput) => {
    let formInputError = document.querySelector(
      `.${formInput.classList[1].toString()} +` + 'span'
    );
    if (!formInput.validity.valid) {
      // display an appropriate error message
      showError(formInput, formInputError);
      // prevent form submission
      event.preventDefault();
    }
  });
  // if the email field is invalid
});

formInputs.forEach((formInput) => {
  formInput.addEventListener('input', () => {
    let formInputError = document.querySelector(
      `.${formInput.classList[1].toString()} +` + 'span'
    );
    if (!formInput.validity.valid) {
      showError(formInput, formInputError);
    } else {
      formInputError.textContent = '';
      formInputError.className = 'error';
    }
  });
  if (formInput.type === 'password') {
    formInput.addEventListener('keyup', () => {
      let password = document.querySelector('#password');
      let confirmPassword = document.querySelector('#confirmPassword');
      if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity('');
        let confirmPasswordError = document.querySelector(
          '#confirmPassword + span'
        );
        console.log(confirmPasswordError);
        confirmPasswordError.textContent = '';
        confirmPasswordError.className = 'error';
      } else {
        confirmPassword.setCustomValidity('Password is different!');
      }
    });
  }
});

function showError(formInput, formInputError) {
  //   console.log(formInputError, formInput.validationMessage);
  formInputError.textContent = formInput.validationMessage;

  formInputError.className = 'error active';
}
