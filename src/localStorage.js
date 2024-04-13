//Class qui agit comme localStorage mais avec des méthodes plus précise dans notre cas.
class localStorageManager{

    storage = null

    constructor(storage){
        this.storage = storage
    }

    //Récupère la valeur à la clé quizz si elle n'existe pas retourne 0
    getQuizzStorage = () =>{
        return this.storage.getItem("quizz") !== null ?
            parseInt(this.storage.getItem("quizz")) : 0
    }

    //Récupère la valeur à la clé time si elle n'existe pas retourne 30
    getTimeStorage = () =>{
        return this.storage.getItem("time") !== null ?
            parseInt(this.storage.getItem("time")) : 30
    }

    //Met à jour la clé time
    setTimeStorage = time => this.storage.setItem("time", time.toString())

    //Met à jour la clé quizz
    setQuizzStorage = compteur => this.storage.setItem("quizz", compteur.toString())

    //Supprime la clé quizz
    removeQuizzStorage = () => this.storage.removeItem("quizz")

    //Supprime la clé time
    removeTimeStorage = () => this.storage.removeItem("time")

}
