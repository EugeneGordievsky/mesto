import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

export {popupFullImage, fullImageSrc, fullImageTitle, closeImageButton, closeAddButton, closeEditButton, imagePopup,
popupEnterName, popupEnterJob, profileName, profileJob};
const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add-card");
const popupFullImage = document.querySelector(".popup_full-image");
const addButton = document.querySelector(".add-button");
const closeEditButton = document.querySelector(".popup__close-button_edit");
const closeAddButton = document.querySelector(".popup__close-button_add");
const closeImageButton = document.querySelector(".popup__close-button_image");
const popupEnterName = document.querySelector(".popup__input_name");
const popupEnterJob = document.querySelector(".popup__input_job");
const popupEditForm = document.querySelector(".popup__form_edit");
const popupAddForm = document.querySelector(".popup__form_add-card");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const listElements = document.querySelector(".elements");
const inputTitle = document.querySelector(".popup__input_title");
const inputSrc = document.querySelector(".popup__input_src");
const fullImageSrc = document.querySelector(".popup__card-image");
const fullImageTitle = document.querySelector(".popup__card-title");
const formClasses = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_error_active"
  };
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const imagePopup = new PopupWithImage(popupFullImage);
function addCard(container, element) {
  container.prepend(element);
};

function addNewCard(data) {
  const newCard = new Card("#card", data, () => imagePopup.open(data.name, data.link));
  const newCardElement = newCard.generateCard();
  addCard(listElements, newCardElement);
}

initialCards.forEach((item) => addNewCard(item));

const userInfo = new UserInfo(profileName, profileJob);
const editPopup = new PopupWithForm(popupEdit, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo();
  editPopup.close();
});
const addCardPopup = new PopupWithForm(popupAdd, (evt) => {
  evt.preventDefault();
  addNewCard({
    name: inputTitle.value,
    link: inputSrc.value,
  });
  addCardPopup.close();
});

imagePopup.setEventListeners();
editPopup.setEventListeners();
addCardPopup.setEventListeners();


const validEditForm = new FormValidator(formClasses, popupEditForm);
const validAddForm = new FormValidator(formClasses, popupAddForm);

validEditForm.enableValidation();
validAddForm.enableValidation();

editButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  validEditForm.clearError();
  editPopup.open();
});

addButton.addEventListener("click", () => {
  popupAddForm.reset();
  validAddForm.clearError();
  addCardPopup.open();
});
