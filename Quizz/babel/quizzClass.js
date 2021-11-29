"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
    Pour jest décommenter la ligne suivante
*/
//import Minuteur from "./minuteur"
var Quizz = function Quizz(quizz, modele, start) {
  var _this = this;

  _classCallCheck(this, Quizz);

  _defineProperty(this, "compteur", 0);

  _defineProperty(this, "quizz", []);

  _defineProperty(this, "minuteur", null);

  _defineProperty(this, "modele", null);

  _defineProperty(this, "checkAnswer", function (answer) {
    if (answer != _this.quizz[_this.compteur].response) {
      _this.modele.response = "Réponse incorrect";
      return -1;
    } else {
      _this.modele.response = "";

      _this.nextQuestion();

      return 1;
    }
  });

  _defineProperty(this, "nextQuestion", function () {
    var event = null;
    _this.compteur++;

    if (_this.finish()) {
      event = new CustomEvent('endQuizz', {
        detail: 0
      });
      storage.removeQuizzStorage();
      _this.modele.response = "Quizz fini";

      _this.minuteur.stopIntervall();
    } else {
      _this.modele.label = _this.quizz[_this.compteur].question;

      _this.minuteur.createIntervall();

      event = new CustomEvent('nextQuestion', {
        detail: _this.compteur
      });
    }

    window.dispatchEvent(event);
  });

  _defineProperty(this, "finish", function () {
    return _this.quizz.length == _this.compteur;
  });

  this.modele = modele;
  this.quizz = quizz;
  this.minuteur = new Minuteur(this);
  this.compteur = start;
  this.minuteur.createIntervall();
  window.addEventListener("click", function () {
    return console.log("test");
  });
};
/*
    Pour jest décommenter la ligne suivante
*/
//export default Quizz