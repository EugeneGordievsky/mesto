export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  };

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._job.textContent = info.job;
  };

  getUserInfo() {
    return {
    userName: this._name.textContent,
    userJob: this._job.textContent,
    };
  };
}

