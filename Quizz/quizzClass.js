const ALLOWEDTIME = 5

class Quizz{

    compteur = 0
    time = ALLOWEDTIME
    response = ""

    domManager = null

    quizz = []

    constructor(domManager,quizz){
        this.domManager = domManager
        this.quizz = quizz

        this.domManager.updateLabel(this.quizz[this.compteur].question)

        //this.minuteur()

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
            this.domManager.updateResponse("Quizz finis")
        }
        else{
            this.domManager.updateLabel(this.quizz[this.compteur].question)
            //this.minuteur(ALLOWEDTIME)
        }

    }

}