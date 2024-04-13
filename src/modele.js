class Modele{

    //Jeux de données du quizz
    questions = [
        { question:"Combien font 9 + 10 ?", response: "19" },
        { question:"C'est quoi un thread ?" , response: "un processus"},
        { question:"Qui a créé git ?", response: "linus torvald"},
        { question:"Il a cracké énigma ?", response: "alan turing"},
    ]

    response = " "
    label = " "

    //Prend en paramètre un index pour savoir si le quizz a déjà commencé ou non
    constructor(index){
        this.label = this.questions[index].question;
    }
}
