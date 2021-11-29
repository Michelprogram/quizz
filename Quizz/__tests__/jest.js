import { describe, it, test, expect, jest } from '@jest/globals'

import sum from '../jest/script'

import FakeStorage from "../jest/fakeStorage"

import Modele from "../src/modele"

import localStorageManager from '../src/localStorage'

import Quizz from "../src/quizzClass"

import DomManager from "../src/domClass"


/* Template pour crée un test

describe(Une description, ()=>{
    * Arrange -> Positionne le système dans un état choisi
    * Action -> Un test doit faire une seule action
    * Assert -> Vérifie l'état attendu
    
    test(Description,()=>{
        expect(méthode).toBe(resultat attendu)
    })
})

*/

//Test de jest
describe("Test du module jest avec une addition", () => {
    test("Addition 2 + 2", () =>{
        expect(sum(2, 2)).toBe(4)
    })
})

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

    const dom = new DomManager(app,modele)

    it("Ajout du label ", ()=> {

        const label = app.querySelector('.label-input')

        expect(label.outerHTML).toBe(`<label class="label-input" for="input-quizz">Combien font 9 + 10 ?</label>`)
    })
})