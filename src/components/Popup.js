export default class Popup {
  constructor (popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._button = this._popup.querySelector(".popup__save-button");
  };

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  };

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  };

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      this.close();
    };
  };

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    };
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("click", (evt) => this._handleOverlayClose(evt));
  }
}
