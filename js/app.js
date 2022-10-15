const words =["Hello","phone","watch"];
var score = document.getElementById("score-display");
var row_1 =[document.getElementById("box-1-1"),document.getElementById("box-1-2"),document.getElementById("box-1-3"),document.getElementById("box-1-4"),document.getElementById("box-1-5")];



function randNum(){
    var Number =Math.floor(Math.random()*3);
    return Number;
}

function setWord(){
    var randWord =words[randNum()];
    for(let a=0;a <randWord.length;a++)
    {
        
        row_1[a].innerHTML =randWord.charAt(a);
        console.log(row_1[a] + "." + randWord.charAt(a) );
    }
}

