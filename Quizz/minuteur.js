const ALLOWEDTIME = 30


class Minuteur{

    intervall = null
    domManager = null
    quizz = null

    time = ALLOWEDTIME

    constructor(quizz,domManager){

        this.quizz = quizz
        this.domManager = domManager

        this.initTime()

    }

    initTime = () => this.time = saveStorage.getTimeStorage()

    createIntervall = ()=>{
        if(this.intervall != null){
            this.stopIntervall()
        }

        this.intervall = setInterval(()=>{

            if (this.time == 0){
                this.stopIntervall()
                this.quizz.nextQuestion()
                this.createIntervall()
            }

            else{
                this.domManager.updateMinuteur(this.time)
                this.time -= 1
                saveStorage.setTimeStorage(this.time)
            }

        },1000)
    }

    stopIntervall = () =>{
        
        clearInterval(this.intervall)

        this.intervall = null
        this.time = ALLOWEDTIME

        if(this.quizz.finish()){
            saveStorage.removeTimeStorage()
        }
    }
}