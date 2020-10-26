import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { editButton, popupEdit, popupAdd, popupFullImage, addButton, popupEditForm, popupAddForm,
profileName, profileJob, inputTitle, inputSrc, formClasses, initialCards, fullImageSrc, fullImageTitle,
popupEnterJob, popupEnterName, closeImageButton} from "../utils/constants.js";
import { Section } from "../components/Section.js";

const newCard = (item) => {
  const card = new Card("#card", item, () => imagePopup.open(item), closeImageButton);
  const newCardElement = card.generateCard();
  return newCardElement;
};

const imagePopup = new PopupWithImage(popupFullImage, fullImageSrc, fullImageTitle);
const validEditForm = new FormValidator(formClasses, popupEditForm);
const validAddForm = new FormValidator(formClasses, popupAddForm);
const userInfo = new UserInfo(profileName, profileJob);
const initCard = new Section({
  items: initialCards,
  renderer: (item) => initCard.addItem(newCard(item), initialCards)},
  ".elements");
const editPopup = new PopupWithForm(popupEdit, (item) => {
  userInfo.setUserInfo(item);
  editPopup.close();
});
const addCardPopup = new PopupWithForm(popupAdd, (item) => {
  initCard.addItem(newCard(item));

  addCardPopup.close();
});

initCard.renderItems();

imagePopup.setEventListeners();
editPopup.setEventListeners();
addCardPopup.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();

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
