import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitFunc) {
    super(popup);
    this._submitFunc = submitFunc;
    this._form = popup.querySelector(".popup__form");
  };

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._formValues = {};

    this._inputList.forEach( (input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunc(this._getInputValues(), this._button);
      this._form.reset();
    });
  };

  close() {
    super.close();
    this._form.reset();
  };
}
