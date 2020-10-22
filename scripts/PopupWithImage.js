import Popup from "./Popup.js";
import {fullImageSrc, fullImageTitle} from "./index.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  };

  open = (title, src) => {
    this._popup.classList.add(".popup_opened");
    fullImageSrc.src = src;
    fullImageTitle.textContent = title;
  }
}
