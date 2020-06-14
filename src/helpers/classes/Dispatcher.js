import store from "redux-store";
import { showNotification } from "utils/toastNotifications";

import {
  LOADING,
  LOADING_DONE,
  PAGE_LOADER,
  SUCCESS,
  FAILURE,
  PAGE_LOADING_DONE,
} from "constants/index";

/**
 * Redux common use cases helper
 * @constructor
 * _dispatch = the dispatch from redux store
 * @param request best to update the request param with the classes setter for auto updating the success and failure param
 * @param success not required will be set automatically when setting the request param
 * @param failure not required will be set automatically when setting the request param
 */

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

  /** setting the desired action for setting all use cases
   *  @param action example action = LOGIN
   *  auto setting the the request type for dispatch to LOGIN
   *  the success type to LOGIN_SUCCESS
   *  and failure type to LOGIN_FAILURE
   */
  set action(action) {
    this._setRequestActions(action);
  }

  _setRequestActions(action) {
    if (action) {
      this._request = action;
      this._success = `${this._request}${SUCCESS}`;
      this._error = `${this._request}${FAILURE}`;
    }
  }

  /**
   *
   * @param {*} loading set to true for dispatching the ui basic loader
   * @param {*} page_loader set to true for dispatching the ui page loader
   */
  request(loading, page_loader) {
    if (loading) {
      this._loading(page_loader);
    }

    this._dispatch({
      type: this._request,
    });
  }

  _loading(page_loader) {
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

  /**
   *
   * @param {*} payload the payload for updating the redux store
   */
  success(payload) {
    this._dispatch({
      type: this._success,
      payload,
    });
  }

  /**
   *
   * @param {*} error object that contains message of the error and display toast of the message
   */
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

  /**
   * stop all loaders
   */
  loadingDone(pageLoader = false) {
    if (pageLoader) {
      this._dispatch({
        type: PAGE_LOADING_DONE,
      });
    } else {
      this._dispatch({
        type: LOADING_DONE,
      });
    }
  }
}
