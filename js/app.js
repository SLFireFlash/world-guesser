const words =["HELLO","PHONE","WATCH"];
const startGame =document.getElementById("StartGame");
const score = document.getElementById("score-display");
const btnCheck =document.getElementById("btnCheck");
const progressBar =document.getElementById("progress-bar");

var levelTrigged = 1;


var row_1 =[document.getElementById("box-value-1-1"),document.getElementById("box-value-1-2"),document.getElementById("box-value-1-3"),document.getElementById("box-value-1-4"),document.getElementById("box-value-1-5")];
var row_2 =[document.getElementById("box-value-2-1"),document.getElementById("box-value-2-2"),document.getElementById("box-value-2-3"),document.getElementById("box-value-2-4"),document.getElementById("box-value-2-5")];
var row_3 =[document.getElementById("box-value-3-1"),document.getElementById("box-value-3-2"),document.getElementById("box-value-3-3"),document.getElementById("box-value-3-4"),document.getElementById("box-value-3-5")];
var row_4 =[document.getElementById("box-value-4-1"),document.getElementById("box-value-4-2"),document.getElementById("box-value-4-3"),document.getElementById("box-value-4-4"),document.getElementById("box-value-4-5")];
var row_5 =[document.getElementById("box-value-5-1"),document.getElementById("box-value-5-2"),document.getElementById("box-value-5-3"),document.getElementById("box-value-5-4"),document.getElementById("box-value-5-5")];


function randWordGen(){
    var randWord =words[Math.floor(Math.random()*3)];
    return randWord;
}

function setWord(){
    gameWord = randWordGen();
    var hidePos = Math.floor(Math.random()*3)
    for(let a=hidePos;a <3;a++)
    {
            row_1[a].innerHTML =gameWord.charAt(a);
            row_1[a].style.backgroundColor = "green"
            row_1[a].style.color = "white"

    }
    if(hidePos !=0){
        for(var b =0;b<hidePos;b++)
        {
            row_1[b].innerHTML ="?";
            row_1[b].style.backgroundColor ="red";
            row_1[b].style.color ="white";
        }
    }
    row_1[3].innerHTML ="?";
    row_1[3].style.backgroundColor ="red";
    row_1[3].style.color ="white";
    row_1[4].innerHTML ="?";
    row_1[4].style.backgroundColor ="red";
    row_1[4].style.color ="white";

    startGame.setAttribute("disabled","");
    btnCheck.removeAttribute("disabled")
}


function wordCheck(){
    
    userAnswer =getUserAnswer();
    if(userAnswer == gameWord){
        window.alert("You Win the Game");  
    }

        switch(levelTrigged){
            case 1:
                level_1();
                break;
            case 2:
                level_2();
                break;
            case 3:
                level_3();
                break;
            case 4:
                level_4();
                break;
            default :
                window.alert("You Lose Try Again");
        }


    }


function getUserAnswer(){
    var userAnswer = document.getElementById("txt-Input").value;
    userAnswer = userAnswer.toUpperCase();
    return userAnswer;

}

function level_1(){

    userAnswer = getUserAnswer()

    for(var c=0;c<5;c++){
        if(userAnswer.charAt(c) == gameWord.charAt(c)){
            row_2[c].style.backgroundColor = "green"
            row_2[c].style.color ="white";
            row_2[c].innerHTML=userAnswer.charAt(c);
            levelTrigged =2;
        }
        else
        {
            row_2[c].style.backgroundColor = "red" ;
            row_2[c].style.color ="white";
            row_2[c].innerHTML=userAnswer.charAt(c); 
            levelTrigged =2;

        }
    }
}

function level_2(){
    userAnswer = getUserAnswer()

    for(var c=0;c<5;c++){
        if(userAnswer.charAt(c) == gameWord.charAt(c)){
            row_3[c].style.backgroundColor = "green"
            row_3[c].style.color ="white";
            row_3[c].innerHTML=userAnswer.charAt(c);
            levelTrigged =3;
        }
        else
        {
            row_3[c].style.backgroundColor = "red" ;
            row_3[c].style.color ="white";
            row_3[c].innerHTML=userAnswer.charAt(c); 
            levelTrigged =3;

        }
    }
}
function level_3(){
    
    userAnswer = getUserAnswer()

    for(var c=0;c<5;c++){
        if(userAnswer.charAt(c) == gameWord.charAt(c)){
            row_4[c].style.backgroundColor = "green"
            row_4[c].style.color ="white";
            row_4[c].innerHTML=userAnswer.charAt(c);
            levelTrigged =4;
        }
        else
        {
            row_4[c].style.backgroundColor = "red" ;
            row_4[c].style.color ="white";
            row_4[c].innerHTML=userAnswer.charAt(c); 
            levelTrigged =4;

        }
    }

}
function level_4(){
    
    userAnswer = getUserAnswer()

    for(var c=0;c<5;c++){
        if(userAnswer.charAt(c) == gameWord.charAt(c)){
            row_5[c].style.backgroundColor = "green"
            row_5[c].style.color ="white";
            row_5[c].innerHTML=userAnswer.charAt(c);
            levelTrigged =5;
        }
        else
        {
            row_5[c].style.backgroundColor = "red" ;
            row_5[c].style.color ="white";
            row_5[c].innerHTML=userAnswer.charAt(c); 
            levelTrigged =5;

        }
    }

}

  

