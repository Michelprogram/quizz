const body = document.querySelector('body')
const divContainer = document.querySelector('.container')

let compteur = 0
let interval = null

const quizz = [
    { question:"Combien font 9 + 10", response: "21" },
    { question:"C'est quoi un thread" , response: "jsp"}
]


const labelDOM = () => {

    const element = quizz[compteur]

    const label = document.createElement('label')
    const input = document.createElement('input')
    input.setAttribute('class','input')

    label.textContent = element.question
    
    divContainer.appendChild(label).appendChild(input)


    input.addEventListener('keyup', (e) =>  e.keyCode === 13 ? checkAnswer() : 0 )

}

const buttonDOM = () => {

    const button = document.createElement('button')
    button.textContent = "Soumettre"

    body.appendChild(button)

    button.addEventListener('click',() => checkAnswer())
}

const checkAnswer = (response) =>{
    const input = response ? response : document.querySelectorAll('input')[compteur]

    if(input.value != quizz[compteur].response){
        updateResponse("Réponse incorrect")
        return -1
    }
    else{
        updateResponse("")
        input.disabled = true
        nextQuestion()
        return 1
    }

}

const minuteurDom = () =>{

    const span = document.createElement('span')
    span.setAttribute('id','minuteur')

    body.appendChild(span)

}

const spanResponse = () =>{
    const span = document.createElement('span')
    span.setAttribute('id','response')

    body.appendChild(span)
}

const updateResponse = (texte) => document.querySelector('#response').innerHTML = texte

const updateMinuteur = (time) => document.querySelector('#minuteur').innerHTML = time

const disableInput = () => document.querySelectorAll('input')[compteur].disabled = true

const nextQuestion = () =>{
    compteur++

    if (compteur == quizz.length){
        updateResponse("Finis")
    }

    else{
        labelDOM()
        minuteur(30)
    }

    clearInterval(interval)
    
}

const minuteur = (time) =>{
    if (time == 0){

        disableInput()
        nextQuestion()
        return clearInterval(interval)
        
    } 
    time -= 1
    updateMinuteur(time)
    interval = setTimeout(()=> minuteur(time), 1000)

}



window.addEventListener('load',() => {

    spanResponse()

    minuteurDom()

    minuteur(30)

    labelDOM()

    buttonDOM()

})

export {
    checkAnswer
}