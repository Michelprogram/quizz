const divContainer = document.querySelector('.app')

window.addEventListener('load', ()=>{

    const domManager = new DomManager(divContainer)

    const quizz = new Quizz(domManager,questions)

    domManager.button.addEventListener('click', _ => quizz.checkAnswer(domManager.input.value))

})