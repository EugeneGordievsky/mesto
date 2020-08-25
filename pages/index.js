let addButton = document.querySelector(".add-button");

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
