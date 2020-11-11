import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popup, callbackFunc) {
    super(popup);
    this._callbackFunc = callbackFunc;
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener("click", () => {
      this._callbackFunc(this._card, this._cardId, this._button)
    });
  }
}
