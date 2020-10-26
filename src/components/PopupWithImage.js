import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup, popupImageSrc, popupImageTitle) {
    super(popup);
    this._popupImageSrc = popupImageSrc;
    this._popupImageTitle = popupImageTitle;
  };

  open(data) {
    super.open();
    this._popupImageSrc.src = data.link;
    this._popupImageSrc.alt = data.name;
    this._popupImageTitle.textContent = data.name;
  };

  close() {
    super.close();
    this._popupImageTitle.textContent = "";
    this._popupImageSrc.src = "";
  };
}
