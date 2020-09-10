const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add-card");
const popupFullImage = document.querySelector(".popup_full-image");
const addButton = document.querySelector(".add-button");
const closeEditButton = document.querySelector(".popup__close-button_edit");
const closeAddButton = document.querySelector(".popup__close-button_add");
const closeImageButton = document.querySelector(".popup__close-button_image");
const elementImage = document.querySelector(".element__image");
const popupEnterName = document.querySelector(".popup__input_name");
const popupEnterJob = document.querySelector(".popup__input_job");
const popupEditForm = document.querySelector(".popup__form_edit");
const popupAddForm = document.querySelector(".popup__form_add-card");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const cardElements = document.querySelector(".elements");
const inputTitle = document.querySelector(".popup__input_title");
const inputSrc = document.querySelector(".popup__input_src");
const cardTemplate = document.querySelector("#card").content;
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


initialCards.forEach(function(item) {
  const initCard = cardTemplate.cloneNode(true);

  initCard.querySelector(".element__title").textContent = item.name;
  initCard.querySelector(".element__image").src = item.link;
  initCard.querySelector(".element__like").addEventListener("click", function(evt) {
    evt.target.classList.toggle("element__like_active");
  });
  initCard.querySelector(".element__delete-button").addEventListener("click", function(evt) {
    const element = evt.target.parentNode;
    element.remove();
  });
  cardElements.append(initCard);

});

function popupEditFormOpenedClosed() {
  popupEdit.classList.toggle("popup_opened");
};

function popupAddFormOpenedClosed() {
  popupAdd.classList.toggle("popup_opened");
};

function popupFullImageOpenedClosed() {
  popupFullImage.classList.toggle("popup_opened");
};

function changeProfileInfo(evt) {
  evt.preventDefault();

  const name = popupEnterName.value;
  const job = popupEnterJob.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  popupEditFormOpenedClosed();
};

function addCard(evt) {
  evt.preventDefault();

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".element__header").textContent = inputTitle.value;
  cardElement.querySelector(".element__image").src = inputSrc.value;
  cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
    evt.target.classList.toggle("element__like_active");
  });
  cardElement.querySelector(".element__delete-button").addEventListener("click", function(evt) {
    const element = evt.target.parentNode;
    element.remove();
  });
  cardElements.prepend(cardElement);

  popupAddFormOpenedClosed();
};

editButton.addEventListener("click", function() {
  popupEnterName.value = profileName.textContent;
  popupEnterJob.value = profileJob.textContent;

  popupEditFormOpenedClosed();
});

closeEditButton.addEventListener("click", popupEditFormOpenedClosed);

addButton.addEventListener("click", function() {
  inputTitle.value = "";
  inputSrc.value = "";

  popupAddFormOpenedClosed();
});
closeAddButton.addEventListener("click", popupAddFormOpenedClosed);

popupEditForm.addEventListener("submit", changeProfileInfo);

popupAddForm.addEventListener("submit", addCard);

closeImageButton.addEventListener("click", popupFullImageOpenedClosed);

elementImage.addEventListener("click", popupFullImageOpenedClosed);
