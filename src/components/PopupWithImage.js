import Popup from "./Popup.js";
import {fullImageSrc, fullImageTitle} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  };

  open(data) {
    document.addEventListener("keyup", this._handleEscClose);
    fullImageSrc.src = data.link;
    fullImageTitle.textContent = data.name;
    fullImageSrc.alt = data.name;
    this._popup.classList.add("popup_opened");
  }
}
