export default class Popup {
  constructor (popup) {
    this._popup = popup;
  };

  open = () => {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
  };

  close = () => {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  };

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      this.close();
    };
  };

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    };
  }

  setEventListeners = () => {
    const closeButton = this._popup.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
  }
}
