export default class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Произошла ошибка: ${result.status}:${result.statusText}`)
  }

  getUserInfo() {
    return fetch(this._options.baseUrl + "/users/me", {
      headers: this._options.headers
    })
    .then((res) => this._checkResponse(res))
  };

  setUserInfo(item) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: item.name,
        about: item.job
      })
    })
    .then((res) => this._checkResponse(res))
  };

  setAvatar(item) {
    return fetch(this._options.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: item.link
      })
    })
    .then((res) => this._checkResponse(res))
  };

  getInitialCards() {
    return fetch(this._options.baseUrl + "/cards", {
      headers: this._options.headers
    })
    .then((res) => this._checkResponse(res))
  };

  addNewCard(info) {
    return fetch(this._options.baseUrl + "/cards", {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: info.name,
        link: info.link
      })
    })
    .then((res) => this._checkResponse(res))
  };

  deleteCard(id) {
    return fetch(this._options.baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._options.headers
    })
    .then((res) => this._checkResponse(res))
  };

  getLikeFunc(id) {
    return fetch(this._options.baseUrl + "/cards/likes/" + id, {
      method: "PUT",
      headers: this._options.headers
    })
    .then((res) => this._checkResponse(res))
  };

  deleteLikeFunc(id) {
    return fetch(this._options.baseUrl + "/cards/likes/" + id, {
      method: "DELETE",
      headers: this._options.headers
    })
    .then((res) => this._checkResponse(res))
  };

  isLoading(button, isLoad) {
    if(isLoad) {
      this._buttonText = button.textContent;
      button.textContent = "Сохранение...";
    } else {
      button.textContent = this._buttonText;
    }
  }
}
