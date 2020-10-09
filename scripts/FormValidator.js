export default class FormValidator {
  constructor(allClasses, validForm) {
    this._validForm = validForm;
    this._errorClass = allClasses.errorClass;
    this._inputErrorClass = allClasses.inputErrorClass;
    this._inactiveButtonClass = allClasses.inactiveButtonClass;
    this._submitButtonSelector = allClasses.submitButtonSelector;
    this._inputSelector = allClasses.inputSelector;
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
    const inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
    this._toggleButtonState();
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._toggleButtonState();
      })
    });
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._disableButton();
    });
  };

  _disableButton() {
    const button = this._element.querySelector(this._submitButtonSelector);
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute("disabled", "true");
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
    const inputList = Array.from(this._element.querySelectorAll(this._inputSelector))
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      const button = this._element.querySelector(this._submitButtonSelector);
      button.classList.remove(this._inactiveButtonClass);
      button.removeAttribute("disabled");
    };
  };
};
