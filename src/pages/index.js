import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import { editButton, popupEdit, popupAdd, popupFullImage, addButton, popupEditForm, popupAddForm,
profileName, profileJob, formClasses, fullImageSrc, fullImageTitle, avatarButton, popupDeleteCard,
popupEnterJob, popupEnterName, profileAvatar, popupEditAvatar, popupAvatarForm, elements} from "../utils/constants.js";
import { Section } from "../components/Section.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
  headers: {
    authorization: "761b2eed-9b1d-4590-81a1-cb393f952eaa",
    'Content-Type': 'application/json'
  }
});

const newCard = (item) => {
  const card = new Card("#card",
  item,
  () => imagePopup.open(item),
  userInfo.getUserInfo().userId,
  (card, cardId) => {
    deleteCardPopup.open(card, cardId);
  },
  (id, counter, activeToggleFunc) => {
    api.getLikeFunc(id)
    .then((res) => {
      activeToggleFunc;
      counter.textContent = res.likes.length;
    })
  },
  (id, counter, activeToggleFunc) => {
    api.deleteLikeFunc(id)
    .then((res) => {
      activeToggleFunc;
      counter.textContent = res.likes.length;
    })
  });
  const newCardElement = card.generateCard();
  return newCardElement;
};



const imagePopup = new PopupWithImage(popupFullImage, fullImageSrc, fullImageTitle);
const validEditForm = new FormValidator(formClasses, popupEditForm);
const validAddForm = new FormValidator(formClasses, popupAddForm);
const validAvatarForm = new FormValidator(formClasses, popupAvatarForm);
const userInfo = new UserInfo(profileName, profileJob, profileAvatar);
const deleteCardPopup = new PopupWithDelete(popupDeleteCard,
  (cardElement, cardId, button) => {
  api.isLoading(button, true);
  api.deleteCard(cardId)
  .then(() => {
    cardElement.remove();
    deleteCardPopup.close();
    api.isLoading(button);
  })
});
const editPopup = new PopupWithForm(popupEdit, (item, button) => {
  api.isLoading(button, true);
  api.setUserInfo(item)
  .then((res) => {
    userInfo.setUserInfo(res);
    editPopup.close();
    api.isLoading(button);
  });
});
const avatarPopup = new PopupWithForm(popupEditAvatar, (item, button) => {
  api.isLoading(button, true);
  api.setAvatar(item)
  .then((res) => {
    userInfo.setAvatar(res);
    avatarPopup.close();
    api.isLoading(button);
  });
});

const addCardPopup = new PopupWithForm(popupAdd, (item, button) => {
  api.isLoading(button, true);
  api.addNewCard(item)
  .then((res) => {
    elements.prepend(newCard(res));
    addCardPopup.close();
    api.isLoading(button);
  });

});


imagePopup.setEventListeners();
editPopup.setEventListeners();
addCardPopup.setEventListeners();
avatarPopup.setEventListeners();
deleteCardPopup.setEventListeners();

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

api.getInitialCards()
.then((res) => {
  const initCard = new Section({
    items: res,
    renderer: (item) => initCard.addItem(newCard(item))},
    ".elements");
  initCard.renderItems();
});

api.getUserInfo()
.then((res) => {
  userInfo.setUserInfo(res);
  userInfo.setAvatar(res);
})
