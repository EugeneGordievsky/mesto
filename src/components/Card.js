export default class Card {
  constructor(cardSelector, data, handleCardClick, popupCloseButton) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._popupCloseButton = popupCloseButton;
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
    this._element.querySelector(".element__like-counter").textContent = this._likes.length;

    return this._element;
  };

  _setEventListeners() {
    this._elementImage.addEventListener("click", this._handleCardClick);
    this._popupCloseButton.addEventListener("click", () => this._handleClosePopup());
    this._element.querySelector(".element__like-button").addEventListener("click",
    (evt) => evt.target.classList.toggle("element__like-button_active"));
    this._element.querySelector(".element__delete-button").addEventListener("click", (evt) => {
      const element = evt.target.closest(".element");
      element.remove();
    });
  };
}
