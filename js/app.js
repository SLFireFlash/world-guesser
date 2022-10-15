const words =["Hello","phone","watch"];
var score = document.getElementById("score-display");


function randNum(){
    var Number =Math.floor(Math.random()*3);
    return Number;
}

function setWord(){
    var randWord =words[randNum()];
    score.innerHTML =randWord;
}

