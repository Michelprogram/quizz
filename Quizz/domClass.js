class DomManager{
    
    input = null
    label = null
    button = null
    minuteur = null
    response = null

    divApp = null

    constructor(divApp){
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
        this.minuteur.setAttribute('id','minuteur')
        this.divApp.appendChild(this.minuteur)
    }

    initResponse = () =>{
        this.response = document.createElement('span')
        this.response.setAttribute('id','response')
        this.divApp.appendChild(this.response)
    }

    updateLabel = value => {
        this.label.innerHTML = value
        this.input.value = ""
    }

    updateMinuteur = time => this.minuteur.innerHTML = time

    updateResponse = text => this.response.innerHTML = text

}