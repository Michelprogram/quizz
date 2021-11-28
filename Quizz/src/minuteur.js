//Pour jest

const ALLOWEDTIME = 10


class Minuteur{

    intervall = null
    quizz = null

    time = ALLOWEDTIME

    constructor(quizz){
        this.quizz = quizz
        this.initTime()
    }

    initTime = () => this.time = storage.getTimeStorage()

    createIntervall = ()=>{
        if(this.intervall != null){
            this.stopIntervall()
        }

        this.intervall = setInterval(()=>{

            if (this.time == 0){
                this.stopIntervall()
                window.dispatchEvent(new CustomEvent('tempsEcoule'));
                this.createIntervall()
            }

            else{
                //envoie l'évenement 'updateMinuteur' à l'objet courant avec 'time' pour paramètre.
                let evt = new CustomEvent('updateMinuteur',{detail:this.time});//le paramètre doit s'appeller detail !
                window.dispatchEvent(evt);
                this.time -= 1
                storage.setTimeStorage(this.time)
            }

        },1000)
    }

    stopIntervall = () =>{
        
        clearInterval(this.intervall)

        this.intervall = null
        this.time = ALLOWEDTIME

        if(this.quizz.finish()){
            storage.removeTimeStorage()
        }
    }
}

