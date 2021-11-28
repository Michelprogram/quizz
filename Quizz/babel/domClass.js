"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DomManager = function DomManager(divApp, modele) {
  var _this = this;

  _classCallCheck(this, DomManager);

  _defineProperty(this, "input", null);

  _defineProperty(this, "label", null);

  _defineProperty(this, "button", null);

  _defineProperty(this, "minuteur", null);

  _defineProperty(this, "response", null);

  _defineProperty(this, "divApp", null);

  _defineProperty(this, "modele", null);

  _defineProperty(this, "initDom", function () {
    _this.initLabel();

    _this.initInput();

    _this.initButton();

    _this.initMinuteur();

    _this.initMinuteur();

    _this.initResponse();

    _this.updateUI();
  });

  _defineProperty(this, "initLabel", function () {
    _this.label = document.createElement('label');

    _this.label.setAttribute('class', 'label-input');

    _this.label.setAttribute('for', 'input-quizz');

    _this.divApp.appendChild(_this.label);
  });

  _defineProperty(this, "initInput", function () {
    _this.input = document.createElement('input');

    _this.input.setAttribute('class', 'input-quizz');

    _this.input.setAttribute('id', 'input-quizz');

    _this.input.setAttribute('name', 'input-quizz');

    _this.divApp.appendChild(_this.input);
  });

  _defineProperty(this, "initButton", function () {
    _this.button = document.createElement('button');
    _this.button.textContent = "Soumettre";

    _this.divApp.appendChild(_this.button);
  });

  _defineProperty(this, "initMinuteur", function () {
    _this.minuteur = document.createElement('span');

    _this.minuteur.setAttribute('class', 'minuteur');

    _this.divApp.appendChild(_this.minuteur);
  });

  _defineProperty(this, "initResponse", function () {
    _this.response = document.createElement('span');

    _this.response.setAttribute('id', 'response');

    _this.divApp.appendChild(_this.response);
  });

  _defineProperty(this, "updateUI", function (value) {
    _this.label.innerHTML = _this.modele.label;
    _this.input.value = "";
    _this.response.innerHTML = _this.modele.response;
  });

  _defineProperty(this, "updateMinuteur", function (time) {
    return _this.minuteur.innerHTML = time;
  });

  this.modele = modele;
  this.divApp = divApp;
  this.initDom();
};