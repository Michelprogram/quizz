const saveStorage = new localStorageManager(localStorage)

class Quizz{

    compteur = 0
    quizz = []
    minuteur = null
    modele = null

    constructor(quizz,modele){
        this.modele = modele
        this.quizz = quizz
        this.minuteur = new Minuteur(this,saveStorage)

        this.initCompteur()

        this.minuteur.createIntervall()

    }

    initCompteur = () => this.compteur = saveStorage.getQuizzStorage()

    checkAnswer = (answer) =>{

        if(answer != this.quizz[this.compteur].response){
            this.modele.response = "Réponse incorrect"
            return -1
        }
        else{
            this.modele.response = ""
            this.nextQuestion()
            this.minuteur.createIntervall()
            return 1
        }

    }

    nextQuestion = () =>{

        this.compteur++
        console.log(this.compteur)

        if (this.finish()){
            saveStorage.removeQuizzStorage()
            this.modele.response = "Quizz fini"
            this.minuteur.stopIntervall()
            return 0
            
        }
        else{
            this.modele.label = this.quizz[this.compteur].question;
        }

        saveStorage.setQuizzStorage(this.compteur)

    }

    finish = () => this.quizz.length == this.compteur

}