
class localStorageManager{

    storage = null

    constructor(storage){
        this.storage = storage
    }

    getQuizzStorage = () =>{
        return this.storage.getItem("quizz") !== null ?
            parseInt(this.storage.getItem("quizz")) : 0
    }

    setQuizzStorage = (compteur) => this.storage.setItem("quizz", compteur.toString())

    removeQuizzStorage = () => {
        this.storage.removeItem("quizz")
    }

}



