const body = document.querySelector('body')
const divContainer = document.querySelector('.app')

let compteur = 0
let interval = null
let response = " "

let input = null;
let label = null;

const allowedTime = 10;//durée d'une question en secondes

//Done
//initialise l'interface
const init = () => {
    //input + label
    label = document.createElement('label')
    input = document.createElement('input')

    input.setAttribute('class','input-quizz')
    input.setAttribute('id','input-quizz')
    input.setAttribute('name','input-quizz')

    label.setAttribute('class','label-input')
    label.setAttribute('for','input-quizz')

    label.innerHTML = quizz[compteur].question
    divContainer.appendChild(label);
    divContainer.appendChild(input);

    //button
    const button = document.createElement('button')
    button.textContent = "Soumettre"
    divContainer.appendChild(button)
 
    button.addEventListener('click',() => {
        checkAnswer();
        updateUI();
    });

    spanResponse();
    
    //minuteur
    minuteurDom();
    window.addEventListener('updateMinuteur',(e) => updateMinuteur(e.detail));//met à jour le minuteur chaque seconde
    window.addEventListener('tempsEcoule',()=>{
        nextQuestion()
        updateUI();
    });//passe à la question suivante quand le temps est écoulé
}

//met à jour l'interface
const updateUI = () => {
    label.innerHTML = quizz[compteur].question;
    input.value = "";
    document.querySelector('#response').innerHTML = response
    //input.addEventListener('keyup', (e) => e === 13 ? checkAnswer() : 0 )// ne marche pas
}

//Done
const minuteurDom = () =>{
    const span = document.createElement('span')
    span.setAttribute('id','minuteur')
    body.appendChild(span)
}

//Done
const spanResponse = () =>{
    const span = document.createElement('span')
    span.setAttribute('id','response')
    body.appendChild(span)
}

//Done
const updateMinuteur = (time) => document.querySelector('#minuteur').innerHTML = time

//Done
//vérifie si la réponse est bonne ou non
const checkAnswer = (answer) =>{
    if(input.value != quizz[compteur].response){
        response = "Réponse incorrect"
    }else{
        response = " ";
        nextQuestion()
    }
}

//Done
//passe à la question suivante
const nextQuestion = () =>{
    compteur++;
    if (compteur == quizz.length){
        response = "Fini";
        compteur--;
    }else{
        clearInterval(interval)
        minuteur(allowedTime)
    }
    //clearInterval(interval);
}

//Done
//gère le minuteur
const minuteur = (time) =>{
    if (time == 0){
        //disableInput()
        window.dispatchEvent(new CustomEvent('tempsEcoule'));
        return clearInterval(interval)       
    } 
    time -= 1

    //envoie l'évenement 'updateMinuteur' à l'objet window avec 'time' pour paramètre.
    let evt = new CustomEvent('updateMinuteur',{detail:time});//le paramètre doit s'appeller detail !
    window.dispatchEvent(evt);

    interval = setTimeout(()=> minuteur(time), 1000)
}

window.addEventListener('load',() => {
    init();
    minuteur(allowedTime)
})

//export {
  //  checkAnswer
//}