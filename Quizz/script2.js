const divContainer = document.querySelector('.app')

window.addEventListener('load', ()=>{
    const modele = new Modele();
    const domManager = new DomManager(divContainer,modele)
    const quizz = new Quizz(modele.questions,modele)

    //bouton
    domManager.button.addEventListener('click', () => {
        quizz.checkAnswer(domManager.input.value);
        domManager.updateUI();});
    
    //minuteur
    window.addEventListener('updateMinuteur',(e) => domManager.updateMinuteur(e.detail));//met à jour le minuteur chaque seconde
    window.addEventListener('tempsEcoule',()=>{
        quizz.nextQuestion();
        domManager.updateUI();
    });//passe à la question suivante quand le temps est écoulé
})