let addButton = document.querySelector(".add-button");
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let page = document.querySelector(".page");
let popupEnterName = document.querySelector(".popup__enter-name");
let popupEnterJob = document.querySelector(".popup__enter-job");
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

function addElement() {
  let elements = document.querySelector(".elements");

  elements.insertAdjacentHTML("beforeend",
        `<div class="element">
          <img src="images/karachaevsk.png" class="element__image" alt="Старое кирпичное здание и лес">
          <div class="element__info">
          <h2 class="element__header">
            Карачаевск
          </h2>
          <button class="element__like"></button>
          </div>
        </div>`
  );
};

addButton.addEventListener("click", addElement);

function popupOpened() {
  popup.classList.add("popup_opened");
  page.classList.add("page_no-scroll");

  popupEnterName.value = profileName.textContent;
  popupEnterJob.value = profileJob.textContent;
};

editButton.addEventListener("click", popupOpened);

function popupClose() {
  popup.classList.remove("popup_opened");
  page.classList.remove("page_no-scroll");
};

closeButton.addEventListener("click", popupClose);

function changeProfileInfo(evt) {
  evt.preventDefault();

  let name = popupEnterName.value;
  let job = popupEnterJob.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  popupClose();
}

popupForm.addEventListener("submit", changeProfileInfo);
