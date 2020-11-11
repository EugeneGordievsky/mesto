export default class Card {
  constructor(cardSelector, data, handleCardClick, myId, handleDelFunc, getLike, delLike) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._myId = myId;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDelFunc = handleDelFunc;
    this._getLike = getLike;
    this._delLike = delLike;
  };

  _getTemplate() {
    const newCard = document.querySelector(this._cardSelector).content.cloneNode(true);
    return newCard;
  };

  _likeActiveToggle() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__delete-button");
    this._card = this._element.querySelector(".element");


    this._elementImage.addEventListener("click", this._handleCardClick);
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like-button_active")) {
        this._delLike(this._cardId, this._likeCounter, this._likeActiveToggle());
      } else {
        this._getLike(this._cardId, this._likeCounter, this._likeActiveToggle());
      }

    });
    if(this._cardOwnerId !== this._myId) {
      this._deleteButton.remove();
    } else {
      this._deleteButton.addEventListener("click", () => {
        this._handleDelFunc(this._card, this._cardId)
      })
    }
  };

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._likeCounter = this._element.querySelector(".element__like-counter");
    this._setEventListeners();

    this._likes.forEach((item) => {
      if (item._id === this._myId) {
        this._likeButton.classList.add("element__like-button_active");
      } else {
        this._likeButton.classList.remove("element__like-button_active");
      }
    })

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._likeCounter.textContent = this._likes.length;

    return this._element;
  };
}
