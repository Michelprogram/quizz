"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var localStorageManager = function localStorageManager(storage) {
  var _this = this;

  _classCallCheck(this, localStorageManager);

  _defineProperty(this, "storage", null);

  _defineProperty(this, "getQuizzStorage", function () {
    return _this.storage.getItem("quizz") !== null ? parseInt(_this.storage.getItem("quizz")) : 0;
  });

  _defineProperty(this, "getTimeStorage", function () {
    return _this.storage.getItem("time") !== null ? parseInt(_this.storage.getItem("time")) : 30;
  });

  _defineProperty(this, "setTimeStorage", function (time) {
    return _this.storage.setItem("time", time.toString());
  });

  _defineProperty(this, "setQuizzStorage", function (compteur) {
    return _this.storage.setItem("quizz", compteur.toString());
  });

  _defineProperty(this, "removeQuizzStorage", function () {
    return _this.storage.removeItem("quizz");
  });

  _defineProperty(this, "removeTimeStorage", function () {
    return _this.storage.removeItem("time");
  });

  this.storage = storage;
};
/*
    Export pour les test JEST
*/
//export default localStorageManager