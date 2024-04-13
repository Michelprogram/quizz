
class localStorageManager{

    storage = null

    constructor(storage){
        this.storage = storage
    }

    getQuizzStorage = () =>{
        return this.storage.getItem("quizz") !== null ?
            parseInt(this.storage.getItem("quizz")) : 0
    }

    getTimeStorage = () =>{
        return this.storage.getItem("time") !== null ?
            parseInt(this.storage.getItem("time")) : 30
    }

    setTimeStorage = time => this.storage.setItem("time", time.toString())

    setQuizzStorage = compteur => this.storage.setItem("quizz", compteur.toString())

    removeQuizzStorage = () => this.storage.removeItem("quizz")

    removeTimeStorage = () => this.storage.removeItem("time")

}

export default localStorageManager