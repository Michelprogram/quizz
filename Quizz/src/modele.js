class Modele{

    questions = [
        { question:"Combien font 9 + 10 ?", response: "19" },
        { question:"C'est quoi un thread ?" , response: "un processus"},
        { question:"Qui a créé git ?", response: "linus torvald"},
        { question:"Il a cracké énigma ?", response: "alan turing"},
    ]

    response = " "
    label = " "

     constructor(index){
        this.label = this.questions[index].question;
    }
}

/*
    Export pour les test JEST
*/

//export default Modele