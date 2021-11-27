class DomManager{
    
    input = null
    label = null
    button = null
    minuteur = null
    response = null

    divApp = null
    modele = null

    constructor(divApp,modele){
        this.modele = modele
        this.divApp = divApp
        this.initDom()
    }

    initDom = () =>{
        this.initLabel()
        this.initInput()
        this.initButton()
        this.initMinuteur()
        this.initMinuteur()
        this.initResponse()

        this.updateUI()
    }

    initLabel = () =>{
        this.label = document.createElement('label')

        this.label.setAttribute('class','label-input')
        this.label.setAttribute('for','input-quizz')

        this.divApp.appendChild(this.label);
    }

    initInput = () =>{
        this.input = document.createElement('input')

        this.input.setAttribute('class','input-quizz')
        this.input.setAttribute('id','input-quizz')
        this.input.setAttribute('name','input-quizz')

        this.divApp.appendChild(this.input);
    }

    initButton = () =>{

        this.button = document.createElement('button')
        this.button.textContent = "Soumettre"
        this.divApp.appendChild(this.button)        
    
    }

    initMinuteur = () =>{
        this.minuteur = document.createElement('span')
        this.minuteur.setAttribute('class','minuteur')
        this.divApp.appendChild(this.minuteur)
    }

    initResponse = () =>{
        this.response = document.createElement('span')
        this.response.setAttribute('id','response')
        this.divApp.appendChild(this.response)
    }

    updateUI = value => {
        this.label.innerHTML = this.modele.label
        this.input.value = ""
        this.response.innerHTML = this.modele.response
    }

    updateMinuteur = time => this.minuteur.innerHTML = time
}