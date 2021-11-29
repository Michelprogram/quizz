"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modele = function Modele(index) {
  _classCallCheck(this, Modele);

  _defineProperty(this, "questions", [{
    question: "Combien font 9 + 10 ?",
    response: "19"
  }, {
    question: "C'est quoi un thread ?",
    response: "un processus"
  }, {
    question: "Qui a créé git ?",
    response: "linus torvald"
  }, {
    question: "Il a cracké énigma ?",
    response: "alan turing"
  }]);

  _defineProperty(this, "response", " ");

  _defineProperty(this, "label", " ");

  this.label = this.questions[index].question;
};
/*
    Pour jest décommenter la ligne suivante
*/
//export default Modele