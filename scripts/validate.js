function inputShowError(formElement, inputElement, errorMessage, allClasses) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(allClasses.inputErrorClass);
  inputErrorText.textContent = errorMessage;
  inputErrorText.classList.add(allClasses.errorClass);
};

function inputHideError(formElement, inputElement, allClasses) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(allClasses.inputErrorClass);
  inputErrorText.classList.remove(allClasses.errorClass);
  inputErrorText.textContent = "";
};

function clearError() {
  const errors = Array.from(document.querySelectorAll(".popup__input_error"));
  const inputs = Array.from(document.querySelectorAll(".popup__input"));
  errors.forEach(function(error) {
    error.textContent = "";
  });
  inputs.forEach(function(input) {
    input.classList.remove("popup__input_type_error");
  });
};

function isValid(formElement, inputElement, allClasses) {
  if (!inputElement.validity.valid) {
    inputShowError(formElement, inputElement, inputElement.validationMessage, allClasses);
  } else {
    inputHideError(formElement, inputElement, allClasses);
  };
};

function hasInvalidInput(inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement, allClasses) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(allClasses.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(allClasses.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "disabled");
  };
};

function setEventListeners(formElement, allClasses) {
  const inputList = Array.from(formElement.querySelectorAll(allClasses.inputSelector));
  const buttonElement = formElement.querySelector(allClasses.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, allClasses);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener("input", function() {
      isValid(formElement, inputElement, allClasses);
      toggleButtonState(inputList, buttonElement, allClasses);
    });
  });
};

function enableValidation(allClasses) {
  const formList = Array.from(document.querySelectorAll(allClasses.formSelector));
  formList.forEach(function(formElement) {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, allClasses);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active'
});
