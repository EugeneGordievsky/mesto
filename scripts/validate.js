function inputShowError(formElement, inputElement, errorMessage) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  inputErrorText.textContent = errorMessage;
  inputErrorText.classList.add("popup__input_error_active");
}

function inputHideError(formElement, inputElement) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  inputErrorText.classList.remove("popup__input_error_active");
  inputErrorText.textContent = "";
}

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    inputShowError(formElement, inputElement, inputElement.validationMessage);
  } else {
    inputHideError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-button_disabled");
  } else {
    buttonElement.classList.remove("popup__save-button_disabled");
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener("input", function() {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach(function(formElement) {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formElement);
  })
}
enableValidation();
