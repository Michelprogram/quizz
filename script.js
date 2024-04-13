const divContainer = document.querySelector('.app')

const storage = new localStorageManager(localStorage)

window.addEventListener('load', ()=>{

    const modele = new Modele(storage.getQuizzStorage());

    const domManager = new DomManager(divContainer,modele)
    const quizz = new Quizz(modele.questions,modele,storage.getQuizzStorage())

    //bouton
    domManager.button.addEventListener('click', () => {
        quizz.checkAnswer(domManager.input.value);
        domManager.updateUI();
    });
    
    //minuteur
    window.addEventListener('updateMinuteur',(e) => domManager.updateMinuteur(e.detail));//met à jour le minuteur chaque seconde
    
    //passe à la question suivante quand le temps est écoulé

    window.addEventListener('tempsEcoule',()=>{

        if (!quizz.finish()){
            quizz.nextQuestion();
            domManager.updateUI();
        }
        else{
            quizz.minuteur.stopIntervall()
        }


    });

    window.addEventListener('nextQuestion', e=> storage.setQuizzStorage(e.detail))

    window.addEventListener('endQuizz', e=>storage.removeQuizzStorage())

})