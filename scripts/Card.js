import {popupFullImage, fullImageSrc, fullImageTitle, closeImageButton, popupClose, popupOpen} from "./index.js";
export default class Card {
  constructor(cardSelector, data) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const selectCard = document.querySelector(this._cardSelector).content.cloneNode(true);
    return selectCard;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;

    return this._element;
  };

  _handleOpenPopup() {
    fullImageTitle.textContent = this._name;
    fullImageSrc.src = this._link;

    popupOpen(popupFullImage);
  };

  _handleClosePopup() {
    fullImageTitle.textContent = "";
    fullImageSrc.src = "";

    popupClose(popupFullImage);
  };

  _setEventListeners() {
    this._element.querySelector(".element__image").addEventListener("click", () => {
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
