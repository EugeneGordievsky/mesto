import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { editButton, popupEdit, popupAdd, popupFullImage, addButton, popupEditForm, popupAddForm,
profileName, profileJob, inputTitle, inputSrc, formClasses, initialCards} from "../utils/constants.js";
import { Section } from "../components/Section.js";

const imagePopup = new PopupWithImage(popupFullImage);
const validEditForm = new FormValidator(formClasses, popupEditForm);
const validAddForm = new FormValidator(formClasses, popupAddForm);
const initCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card("#card", item, () => imagePopup.open(item));
    const newCardElement = newCard.generateCard();

    initCard.addItem(newCardElement);
  }},".elements");
const userInfo = new UserInfo(profileName, profileJob);
const editPopup = new PopupWithForm(popupEdit, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo();
  editPopup.close();
});
const addCardPopup = new PopupWithForm(popupAdd, (evt) => {
  evt.preventDefault();
  const item = {
    name: inputTitle.value,
    link: inputSrc.value,
  };

  const newCard = new Card("#card", item, () => imagePopup.open(item));
  const newCardElement = newCard.generateCard();

  initCard.addItem(newCardElement);

  addCardPopup.close();
});

initCard.renderItems();

imagePopup.setEventListeners();
editPopup.setEventListeners();
addCardPopup.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();

editButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  validEditForm.clearError();
  editPopup.open();
});

addButton.addEventListener("click", () => {
  validAddForm.clearError();
  addCardPopup.open();
});
