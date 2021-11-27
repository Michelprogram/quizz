const saveStorage = new localStorageManager(localStorage)

class Quizz{

    compteur = 0
    response = ""

    domManager = null

    quizz = []

    minuteur = null

    constructor(domManager,quizz){

        this.domManager = domManager
        this.quizz = quizz
        this.minuteur = new Minuteur(this,domManager,saveStorage)

        this.initCompteur()

        this.domManager.updateLabel(this.quizz[this.compteur].question)

        this.minuteur.createIntervall()

    }

    initCompteur = () => this.compteur = saveStorage.getQuizzStorage()

    checkAnswer = (answer) =>{

        if(answer != this.quizz[this.compteur].response){
            this.domManager.updateResponse("Réponse incorrect")
            return -1
        }
        else{
            
            this.domManager.updateResponse("")
            this.nextQuestion()
            this.minuteur.createIntervall()
            return 1
        }

    }

    nextQuestion = () =>{

        this.compteur++

        if (this.finish()){
            saveStorage.removeQuizzStorage()
            this.domManager.updateResponse("Quizz finis")
            this.minuteur.stopIntervall()
            return 0
            
        }
        else{
            this.domManager.updateLabel(this.quizz[this.compteur].question)
        }

        saveStorage.setQuizzStorage(this.compteur)

    }

    finish = () => this.quizz.length == this.compteur

}