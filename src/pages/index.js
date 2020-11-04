import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { editButton, popupEdit, popupAdd, popupFullImage, addButton, popupEditForm, popupAddForm,
profileName, profileJob, formClasses, fullImageSrc, fullImageTitle, avatarButton,
popupEnterJob, popupEnterName, closeImageButton, profileAvatar, popupEditAvatar, popupAvatarForm} from "../utils/constants.js";
import { Section } from "../components/Section.js";

const newCard = (item) => {
  const card = new Card("#card", item, () => imagePopup.open(item), closeImageButton);
  const newCardElement = card.generateCard();
  return newCardElement;
};

const imagePopup = new PopupWithImage(popupFullImage, fullImageSrc, fullImageTitle);
const validEditForm = new FormValidator(formClasses, popupEditForm);
const validAddForm = new FormValidator(formClasses, popupAddForm);
const validAvatarForm = new FormValidator(formClasses, popupAvatarForm);
const userInfo = new UserInfo(profileName, profileJob);
const editPopup = new PopupWithForm(popupEdit, (item) => {
  userInfo.setUserInfo(item);
  editPopup.close();
});
const addCardPopup = new PopupWithForm(popupAdd, (item) => {
  initCard.addItem(newCard(item));

  addCardPopup.close();
});
const avatarPopup = new PopupWithForm(popupEditAvatar, (item) => {
  console.log(item);
});


imagePopup.setEventListeners();
editPopup.setEventListeners();
addCardPopup.setEventListeners();
avatarPopup.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();
validAvatarForm.enableValidation();

editButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  popupEnterName.value = user.userName;
  popupEnterJob.value = user.userJob;
  validEditForm.clearError();
  editPopup.open();
});

addButton.addEventListener("click", () => {
  validAddForm.clearError();
  addCardPopup.open();
});

avatarButton.addEventListener("click", () => {
  avatarPopup.open();
})

fetch("https://mesto.nomoreparties.co/v1/cohort-17/cards", {
    headers: {
      authorization: "761b2eed-9b1d-4590-81a1-cb393f952eaa"
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
  })
  .then((result) => {
    const initCardServer = new Section({
      items: result,
      renderer: (item) => initCardServer.addItem(newCard(item), result)},
      ".elements");
      initCardServer.renderItems()})
  .catch((err) => {
    console.log(err);
  })

fetch("https://mesto.nomoreparties.co/v1/cohort-17/users/me", {
  headers: {
    authorization: "761b2eed-9b1d-4590-81a1-cb393f952eaa"
  }
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
  })
  .then((result) => {
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
    profileAvatar.src = result.avatar;
  })
