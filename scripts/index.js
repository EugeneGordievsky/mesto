let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let popupEnterName = document.querySelector(".popup__input_name");
let popupEnterJob = document.querySelector(".popup__input_job");
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");


function popupOpened() {
  popup.classList.add("popup_opened");

  popupEnterName.value = profileName.textContent;
  popupEnterJob.value = profileJob.textContent;
};

function popupClose() {
  popup.classList.remove("popup_opened");
};

function changeProfileInfo(evt) {
  evt.preventDefault();

  let name = popupEnterName.value;
  let job = popupEnterJob.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  popupClose();
}


closeButton.addEventListener("click", popupClose);
editButton.addEventListener("click", popupOpened);
popupForm.addEventListener("submit", changeProfileInfo);
