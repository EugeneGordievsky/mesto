/*function inputShowError(formElement, inputElement, errorMessage) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  inputErrorText.textContent = errorMessage;
  inputErrorText.classList.add("popup__input_error_active");
};

function inputHideError(formElement, inputElement) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  inputErrorText.classList.remove("popup__input_error_active");
  inputErrorText.textContent = "";
};

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    inputShowError(formElement, inputElement, inputElement.validationMessage);
  } else {
    inputHideError(formElement, inputElement);
  };
};

function hasInvalidInput(inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-button_disabled");
  } else {
    buttonElement.classList.remove("popup__save-button_disabled");
  };
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener("input", function() {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach(function(formElement) {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}*/


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
  } else {
    buttonElement.classList.remove(allClasses.inactiveButtonClass);
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
}

function enableValidation(allClasses) {
  const formList = Array.from(document.querySelectorAll(allClasses.formSelector));
  formList.forEach(function(formElement) {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, allClasses);
  });
}
