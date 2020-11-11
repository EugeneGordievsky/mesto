export default class Api {
  constructor(options) {
    this._options = options;
  }

  getUserInfo() {
    return fetch(this._options.baseUrl + "/users/me", {
      headers: this._options.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  };

  setAvatar(item) {
    return fetch(this._options.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: item.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  };

  getInitialCards() {
    return fetch(this._options.baseUrl + "/cards", {
      headers: this._options.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  };

  deleteCard(id) {
    return fetch(this._options.baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._options.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  };

  getLikeFunc(id) {
    return fetch(this._options.baseUrl + "/cards/likes/" + id, {
      method: "PUT",
      headers: this._options.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  };

  deleteLikeFunc(id) {
    return fetch(this._options.baseUrl + "/cards/likes/" + id, {
      method: "DELETE",
      headers: this._options.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`)
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
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
