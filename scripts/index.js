import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
export {popupFullImage, fullImageSrc, fullImageTitle, closeImageButton, popupOpen, popupClose};
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

function clearError() {
  const errors = Array.from(document.querySelectorAll(".popup__input_error"));
  const inputs = Array.from(document.querySelectorAll(".popup__input"));
  errors.forEach(function(error) {
    error.textContent = "";
  });
  inputs.forEach(function(input) {
    input.classList.remove("popup__input_type_error");
  });
};

function popupOpen(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", closeOnOverlay);
  document.addEventListener("keyup", closeOnEsc);
};

function popupClose(popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener("click", closeOnOverlay);
  document.removeEventListener("keyup", closeOnEsc);
  clearError();
};

function closeOnEsc(evt) {
  const openPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    evt.preventDefault();
    console.log("1");
  };
};

function closeOnOverlay(evt) {
  const openPopup = document.querySelector(".popup_opened");
  if (evt.target.classList.contains("popup")) {
    popupClose(openPopup);
  };
};

function changeProfileInfo(evt) {
  evt.preventDefault();

  const name = popupEnterName.value;
  const job = popupEnterJob.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  popupClose(popupEdit);
};

function addCard(container, element) {
  container.prepend(element);
};

function addNewCard(data) {
  const newCard = new Card("#card", data);
  const newCardElement = newCard.generateCard();
  addCard(listElements, newCardElement);
}

function valid(allClasses, formValid) {
  const validForm = new FormValidator(allClasses, formValid);
  validForm.enableValidation();
};

initialCards.forEach((item) => addNewCard(item));

editButton.addEventListener("click", function() {
  popupEnterName.value = profileName.textContent;
  popupEnterJob.value = profileJob.textContent;

  popupOpen(popupEdit);
});

closeEditButton.addEventListener("click", function() {popupClose(popupEdit);});

addButton.addEventListener("click", function() {
  popupAddForm.reset();

  popupOpen(popupAdd);
});

closeAddButton.addEventListener("click", function(){popupClose(popupAdd)});

popupEditForm.addEventListener("submit", changeProfileInfo);

popupAddForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  addNewCard({
    name: inputTitle.value,
    link: inputSrc.value,
  });
  popupClose(popupAdd);
});

closeImageButton.addEventListener("click", function(){popupClose(popupFullImage)});

valid(formClasses, popupEditForm);

valid(formClasses, popupAddForm);
