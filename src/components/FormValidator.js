export default class FormValidator {
  constructor(allClasses, validForm) {
    this._validForm = validForm;
    this._errorClass = allClasses.errorClass;
    this._inputErrorClass = allClasses.inputErrorClass;
    this._inactiveButtonClass = allClasses.inactiveButtonClass;
    this._submitButtonSelector = allClasses.submitButtonSelector;
    this._inputSelector = allClasses.inputSelector;
    this._inputList = Array.from(this._validForm.querySelectorAll(this._inputSelector));
    this._button = this._validForm.querySelector(this._submitButtonSelector);
  };

  _getForm() {
    const form = this._validForm;
    return form;
  };

  enableValidation() {
    this._element = this._getForm();
    this._setEventListeners();
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._disableButton();
    });
  };

  clearError() {
    const errors = Array.from(this._element.querySelectorAll(".popup__input_error"));
    errors.forEach(function(error) {
      error.textContent = "";
    });
    this._inputList.forEach(function(input) {
      input.classList.remove("popup__input_type_error");
    });
  };

  _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.setAttribute("disabled", "true");
  };

  _inputShowError(input) {
    const inputErrorText = this._element.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    inputErrorText.textContent = input.validationMessage;
    inputErrorText.classList.add(this._errorClass);
  };

  _inputHideError(input) {
    const inputErrorText = this._element.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    inputErrorText.textContent = "";
    inputErrorText.classList.remove(this._errorClass);
  };

  _isValid(input) {
    if (!input.validity.valid) {
      this._inputShowError(input);
    } else {
      this._inputHideError(input);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute("disabled");
    };
  };
};
