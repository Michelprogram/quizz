class Quizz{

    compteur = 0
    quizz = []
    minuteur = null
    modele = null

    //Débute un minuteur au début de la partie
    constructor(quizz,modele,start){

        this.modele = modele
        this.quizz = quizz

        this.minuteur = new Minuteur(this)

        this.compteur = start

        this.minuteur.createIntervall()

    }

    //Vérifie la correspondance de la réponse saisie et attendu
    checkAnswer = (answer) =>{

        if(answer != this.quizz[this.compteur].response){
            this.modele.response = "Réponse incorrect"
            return -1
        }
        else{
            this.modele.response = ""
            this.nextQuestion()
            return 1
        }

    }

    //Passe à la prochaine question, s'arrête si il n'y a plus de question
    nextQuestion = () =>{

        let event = null

        this.compteur++

        if (this.finish()){
            event = new CustomEvent('endQuizz',{ detail : 0 })
            storage.removeQuizzStorage()
            this.modele.response = "Quizz fini"
            this.minuteur.stopIntervall()
            
        }
        else{
            this.modele.label = this.quizz[this.compteur].question;
            this.minuteur.createIntervall()

            event = new CustomEvent('nextQuestion',{ detail : this.compteur })
        }

        window.dispatchEvent(event)

    }

    //S'arrête quand le compteur vaut la taille du tableau de question
    finish = () => this.quizz.length == this.compteur

}
