const words =["HELLO","PHONE","WATCH"];
const startGame =document.getElementById("StartGame");
const score = document.getElementById("score-display");
const btnCheck =document.getElementById("btnCheck");
const progressBar =document.getElementById("progress-bar");


var row_1 =[document.getElementById("box-value-1-1"),document.getElementById("box-value-1-2"),document.getElementById("box-value-1-3"),document.getElementById("box-value-1-4"),document.getElementById("box-value-1-5")];
var row_2 =[document.getElementById("box-value-2-1"),document.getElementById("box-value-2-2"),document.getElementById("box-value-2-3"),document.getElementById("box-value-2-4"),document.getElementById("box-value-2-5")];
var row_3 =[document.getElementById("box-value-3-1"),document.getElementById("box-value-3-2"),document.getElementById("box-value-3-3"),document.getElementById("box-value-2-4"),document.getElementById("box-value-3-5")];
var row_4 =[document.getElementById("box-value-4-1"),document.getElementById("box-value-4-2"),document.getElementById("box-value-4-3"),document.getElementById("box-value-4-4"),document.getElementById("box-value-4-5")];
var row_5 =[document.getElementById("box-value-5-1"),document.getElementById("box-value-5-2"),document.getElementById("box-value-5-3"),document.getElementById("box-value-5-4"),document.getElementById("box-value-5-5")];


function randWordGen(){
    var randWord =words[Math.floor(Math.random()*3)];
    return randWord;
}

function setWord(){
    gameWord = randWordGen();
    var hidePos = Math.floor(Math.random()*3)
    console.log("hide pos: " + hidePos)
    for(let a=hidePos;a <3;a++)
    {
            row_1[a].innerHTML =gameWord.charAt(a);
            row_1[a].style.backgroundColor = "green"
            row_1[a].style.color = "white"
            console.log(row_1[a] + "." + gameWord.charAt(a) );

    }
    if(hidePos !=0){
        for(var b =0;b<hidePos;b++)
        {
            row_1[b].innerHTML ="?";
            row_1[b].style.backgroundColor ="red";
        }
    }
    row_1[3].innerHTML ="?";
    row_1[3].style.backgroundColor ="red";
    row_1[4].innerHTML ="?";
    row_1[4].style.backgroundColor ="red";

    startGame.setAttribute("disabled","");
    btnCheck.removeAttribute("disabled")
}


function wordCheck(){
    var userAnswer = document.getElementById("txt-Input").value;
    userAnswer = userAnswer.toUpperCase();
    console.log("Game Word: " +gameWord);
    for(var c=0;c<5;c++){
        if(userAnswer.charAt(c) == gameWord.charAt(c)){
            row_2[c].style.backgroundColor = "green"
            row_1[c].style.color = "white"
            row_2[c].innerHTML=userAnswer.charAt(c);

        }
        else
        {
            row_2[c].style.backgroundColor = "red" ;
            row_1[c].style.color = "white"
            row_2[c].innerHTML=userAnswer.charAt(c); 

        }


    }
}

  

