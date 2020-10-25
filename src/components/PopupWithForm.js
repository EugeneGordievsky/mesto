import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitFunc) {
    super(popup);
    this._submitFunc = submitFunc;
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
    const closeButton = this._popup.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("submit", this._submitFunc);
  };

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.querySelector(".popup__form").reset();
  };
}
