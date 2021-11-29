"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Pour jest
var ALLOWEDTIME = 30;

var Minuteur = function Minuteur(quizz) {
  var _this = this;

  _classCallCheck(this, Minuteur);

  _defineProperty(this, "intervall", null);

  _defineProperty(this, "quizz", null);

  _defineProperty(this, "time", ALLOWEDTIME);

  _defineProperty(this, "initTime", function () {
    return _this.time = storage.getTimeStorage();
  });

  _defineProperty(this, "createIntervall", function () {
    if (_this.intervall != null) {
      _this.stopIntervall();
    }

    _this.intervall = setInterval(function () {
      if (_this.time == 0) {
        _this.stopIntervall();

        window.dispatchEvent(new CustomEvent('tempsEcoule'));

        _this.createIntervall();
      } else {
        //envoie l'évenement 'updateMinuteur' à l'objet courant avec 'time' pour paramètre.
        var evt = new CustomEvent('updateMinuteur', {
          detail: _this.time
        }); //le paramètre doit s'appeller detail !

        window.dispatchEvent(evt);
        _this.time -= 1;
        storage.setTimeStorage(_this.time);
      }
    }, 1000);
  });

  _defineProperty(this, "stopIntervall", function () {
    clearInterval(_this.intervall);
    _this.intervall = null;
    _this.time = ALLOWEDTIME;

    if (_this.quizz.finish()) {
      storage.removeTimeStorage();
    }
  });

  this.quizz = quizz;
  this.initTime();
};