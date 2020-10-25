import {popupEnterJob, popupEnterName} from "../utils/constants.js";

export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  };

  setUserInfo() {
    this._name.textContent = popupEnterName.value;
    this._job.textContent = popupEnterJob.value;
  };

  getUserInfo() {

    popupEnterName.value = this._name.textContent;
    popupEnterJob.value = this._job.textContent;
  };
}

