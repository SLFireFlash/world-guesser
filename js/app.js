const words =["HELLO","PHONE","WATCH"];
const startGame =document.getElementById("StartGame");
var score = document.getElementById("score-display");
var row_1 =[document.getElementById("box-value-1-1"),document.getElementById("box-value-1-2"),document.getElementById("box-value-1-3"),document.getElementById("box-value-1-4"),document.getElementById("box-value-1-5")];


function randWordGen(){
    var randWord =words[Math.floor(Math.random()*3)];
    return randWord;
}

function setWord(){
    var gameWord = randWordGen();
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


    //startGame.setAttribute("disabled","");
}


