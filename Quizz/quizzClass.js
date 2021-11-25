const ALLOWEDTIME = 5

const saveStorage = new localStorageManager(localStorage)

class Quizz{

    compteur = 0
    time = ALLOWEDTIME
    response = ""

    domManager = null

    quizz = []

    constructor(domManager,quizz){
        this.domManager = domManager
        this.quizz = quizz

        this.initCompteur()

        this.domManager.updateLabel(this.quizz[this.compteur].question)

        //this.minuteur()

    }

    initCompteur = () =>{
        this.compteur = saveStorage.getQuizzStorage()
    }

    checkAnswer = (answer) =>{

        if(answer != this.quizz[this.compteur].response){
            this.domManager.updateResponse("Réponse incorrect")
            return -1
        }
        else{
            
            this.domManager.updateResponse("")
            this.nextQuestion()
            return 1
        }

    }

    nextQuestion = () =>{

        this.compteur++

        if (this.compteur == this.quizz.length ){
            saveStorage.removeQuizzStorage()
            this.domManager.updateResponse("Quizz finis")

            return 0
            
        }
        else{
            this.domManager.updateLabel(this.quizz[this.compteur].question)
            //this.minuteur(ALLOWEDTIME)
        }

        saveStorage.setQuizzStorage(this.compteur)

    }

}