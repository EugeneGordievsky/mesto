import {popupFullImage, fullImageSrc, fullImageTitle, closeImageButton} from "./index.js";
export default class Card {
  constructor(cardSelector, data) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const newCard = document.querySelector(this._cardSelector).content.cloneNode(true);
    return newCard;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    return this._element;
  };

  _handleOpenPopup() {
    fullImageTitle.textContent = this._name;
    fullImageSrc.src = this._link;

    popupFullImage.classList.add("popup_opened");
    document.addEventListener("keyup", this._closeOnEsc);
    popupFullImage.addEventListener("click", this._closeOnOverlay);
  };

  _handleClosePopup() {
    fullImageTitle.textContent = "";
    fullImageSrc.src = "";

    popupFullImage.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._closeOnEsc);
    popupFullImage.removeEventListener("click", this._closeOnOverlay);
  };

  _closeOnEsc(evt) {
    if (evt.key === "Escape") {
      this._handleClosePopup()
    }
  }

  _closeOnOverlay(evt) {
    if(evt.target.classList.contains("popup")) {
      this._handleClosePopup();
    }
  }

  _setEventListeners() {
    this._elementImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    closeImageButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
    this._element.querySelector(".element__like").addEventListener("click", function(evt) {
      evt.target.classList.toggle("element__like_active");
    })
    this._element.querySelector(".element__delete-button").addEventListener("click", function(evt) {
      const element = evt.target.closest(".element");
      element.remove();
    });
  };
}
