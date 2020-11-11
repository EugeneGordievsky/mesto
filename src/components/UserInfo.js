export default class UserInfo {
  constructor(name, job, avatar) {
    this._name = name;
    this._job = job;
    this._avatar = avatar;
  };

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._job.textContent = info.about;
    this._id = info._id;
  };

  setAvatar(info) {
    this._avatar.src = info.avatar;
  }

  getUserInfo() {
    return {
    userName: this._name.textContent,
    userJob: this._job.textContent,
    userId: this._id
    };
  };
}

