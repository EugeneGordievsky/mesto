export {editButton, popupEdit, popupAdd, popupFullImage, addButton, closeImageButton,
popupEnterName, popupEnterJob, popupEditForm, popupAddForm, profileJob, profileName, profileAvatar, inputSrc, inputTitle,
fullImageSrc, fullImageTitle, formClasses, popupEditAvatar, avatarButton, popupAvatarForm};

const avatarButton = document.querySelector(".profile__avatar-button");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".add-button");
const closeImageButton = document.querySelector(".popup__close-button_image");

const popupEditAvatar = document.querySelector(".popup__edit-avatar");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add-card");
const popupFullImage = document.querySelector(".popup_full-image");

const popupEditForm = popupEdit.querySelector(".popup__form");
const popupAddForm = popupAdd.querySelector(".popup__form");
const popupAvatarForm = popupEditAvatar.querySelector(".popup__form");

const popupEnterName = document.querySelector(".popup__input_name");
const popupEnterJob = document.querySelector(".popup__input_job");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileAvatar = document.querySelector(".profile__avatar");

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
