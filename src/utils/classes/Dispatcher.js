import store from "redux-store";
import { showNotification } from "utils/toastNotifications";

import {
  LOADING,
  LOADING_DONE,
  PAGE_LOADER,
  SUCCESS,
  FAILURE,
} from "constants/index";

export default class Dispatcher {
  constructor(request, success, failure) {
    this._dispatch = store.dispatch;
    this._request = request ? request : "";
    this._success = success ? success : `${this._request}${SUCCESS}`;
    this._error = failure ? failure : `${this._request}${FAILURE}`;
  }

  get action() {
    return this.request;
  }

  set action(action) {
    this.setRequestActions(action);
  }

  setRequestActions(action) {
    if (action) {
      this._request = action;
      this._success = `${this._request}${SUCCESS}`;
      this._error = `${this._request}${FAILURE}`;
    }
  }

  request(loading, page_loader) {
    if (loading) {
      this.loading(page_loader);
    }

    this._dispatch({
      type: this._request,
    });
  }

  loading(page_loader) {
    if (page_loader) {
      this._dispatch({
        type: PAGE_LOADER,
      });
    } else {
      this._dispatch({
        type: LOADING,
      });
    }
  }

  success(payload) {
    this._dispatch({
      type: this._success,
      payload,
    });
  }

  failure(error = {}) {
    this.showToast("error", error.message || error._message);
    this._dispatch({
      type: this._error,
      error,
    });
  }

  showToast(type = "error", message) {
    if (message) showNotification(message ? message : "Bad Request", type);
  }

  loadingDone() {
    this._dispatch({
      type: LOADING_DONE,
    });
  }
}
