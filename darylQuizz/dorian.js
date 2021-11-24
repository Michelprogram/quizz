window.addEventListener('load',setup);
const questions = [{question:"What's 9+10 ?",reponse:"21"},
                    {question:"What's your name",reponse:"Lebron James"},
                {question:"Lebron James ?",reponse:"Lebron James"}];
var currentQuestionNumber;
var button,compteur;
const allowedTime=30;
var timer,x;

function setup(){
    //création du formulaire
    button = document.createElement("button");
    button.setAttribute("typ","text");
    button.setAttribute("id","button");
    button.innerHTML = "Submit";

    compteur = document.createElement("p");
    compteur.setAttribute("id","timer");
    compteur.innerHTML = timer; 

    //initialisation du premier input
    currentQuestionNumber=0;
    initInput(currentQuestionNumber);
    document.body.appendChild(button);
}

function initInput(){
    //remove the previous input question
    if(currentQuestionNumber>0){
        clearInput();       
    }

    var inputName = "chaine"+currentQuestionNumber;
    var labelId = "question"+currentQuestionNumber;

    var label = document.createElement("label");
    label.setAttribute("for",inputName);
    label.setAttribute("id",labelId)
    label.innerHTML = questions[currentQuestionNumber].question;

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name",inputName);
    input.setAttribute("id",inputName);

    document.body.appendChild(label);
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));
    button.addEventListener("click",verifyAnswer(currentQuestionNumber,input));

    //set timer
    timer = allowedTime;
    document.body.appendChild(compteur);
    x = window.setInterval(function(){
        timer--;
        console.log(timer);
    },1000);
}

function clearInput(){
    var previousInputName = "chaine"+(currentQuestionNumber-1);
    var previousInput = document.getElementById(previousInputName);
    var previousLabel = document.getElementById("question"+(currentQuestionNumber-1));
    previousInput.value=' ';
    previousLabel.setAttribute("hidden","true");
    window.clearInterval(x);//clear the timer
}

var verifyAnswer = function(questionNumber,input){
    return () => {
        var answer = input.value;
        if(answer === questions[questionNumber].reponse){
            if(++currentQuestionNumber<questions.length){
                initInput();
            }else{
                clearInput();
                alert("BRAVOOOO !");
            }
        }
    };
}

export {verifyAnswer};
/*calculDistanceHamming = function(chaine1,chaine2){
    var distance = 0;
    if(chaine1.length != chaine2.length){
        distance = -1;
    }else{
        for(var i=0;i<chaine2.length;i++){
            if(chaine1[i] !== chaine2[i]){
                distance++;
            }
        }
    }
    return distance;
}

calculHamming = function(){
    var chaine1 = document.getElementById("chaine1").value;
    var chaine2 = document.getElementById("chaine2").value;

    alert(calculDistanceHamming(chaine1,chaine2));
};*/