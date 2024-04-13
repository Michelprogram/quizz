import { describe, it, expect, jest } from '@jest/globals'

import 'regenerator-runtime/runtime'

import sum from '../jest/script'

import FakeStorage from "../jest/fakeStorage"

import Modele from "../jest/modele"

import localStorageManager from '../jest/localStorage'

import Quizz from "../jest/quizzClass"

import DomManager from "../jest/domClass"

import Minuteur from "../jest/minuteur"


/* Template pour crée un test

describe(Une description, ()=>{
    * Arrange -> Positionne le système dans un état choisi
    * Action -> Un test doit faire une seule action
    * Assert -> Vérifie l'état attendu
    
    it(Description,()=>{
        expect(méthode).toBe(resultat attendu)
    })
})

*/

//Vérification du module jest avec une simple addition
describe("Test du module jest avec une addition", () => {
    it("Addition 2 + 2", () =>{
        expect(sum(2, 2)).toBe(4)
    })
})

//Simule un début de questionnaire avec ou sans localstorage
describe("Début du questionnaire avec localStorage et sans localStorage", ()=>{

    const storage = new FakeStorage()

    it("Sans localStorage", ()=>{

        const localStorage = new localStorageManager(storage)

        const model = new Modele(localStorage.getQuizzStorage())

        expect(model.label).toBe("Combien font 9 + 10 ?")

    })

    it("Avec localStorage", ()=>{

        storage.setItem("quizz",2)

        const localStorage = new localStorageManager(storage)

        const model = new Modele(localStorage.getQuizzStorage())

        expect(model.label).toBe("Qui a créé git ?")

        
    })


})

describe("Test si une réponse correspond au jeux de données des questions",()=>{

    global.storage = new localStorageManager(new FakeStorage())

    //Commence à la question Qui a créé git ?
    const modele = new Modele(2)

    const quizz = new Quizz(modele.questions,modele,2)

    it("Réponse incorrect", () => expect(quizz.checkAnswer("alan turing")).toBe(-1) )

    it("Réponse correct",() => expect(quizz.checkAnswer("linus torvald")).toBe(1))


})

describe("Génération du dom", () =>{

    document.body.innerHTML = "<div class='app'></div>"

    const modele = new Modele(0)

    const app = document.querySelector('.app')

    new DomManager(app,modele)

    it("Ajout du label ", ()=> {

        const label = app.querySelector('.label-input')

        expect(label.outerHTML).toBe(`<label class="label-input" for="input-quizz">Combien font 9 + 10 ?</label>`)
    })

    it("Ajout de l'input ", ()=> {

        const input = app.querySelector('.input-quizz')

        expect(input.outerHTML).toBe(`<input class="input-quizz" id="input-quizz" name="input-quizz">`)
    })
})

describe("Minuteur", ()=>{

    jest.useFakeTimers()

    global.storage = new localStorageManager(new FakeStorage())

    const modele = new Modele(2)

    const quizz = new Quizz(modele.questions,modele,2)

    const minuteur = new Minuteur(quizz)

    it("Temps écoulé après 5 secondes", ()=>{
        minuteur.createIntervall()

        jest.advanceTimersByTime(5000)

        expect(minuteur.time).toBe(25)
    })

    it("Temps écoule après 30 secondes", ()=>{

        minuteur.createIntervall()

        jest.advanceTimersByTime(30000)

        expect(minuteur.time).toBe(0)
        
    })

})