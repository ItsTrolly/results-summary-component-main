import data from './data.json' assert {type: 'json'};

let reactionScore = data[0].score;
let reaction = data[0].category;
let memoryScore = data[1].score;
let memory = data[1].category;
let verbalScore = data[2].score;
let verbal = data[2].category;
let visualScore = data[3].score;
let visual = data[3].category;


window.onload = function() {
    document.getElementById('averageScore').innerHTML = Math.floor((reactionScore + memoryScore + verbalScore + visualScore) / 4 ) ;
    document.getElementById("reaction").innerHTML = reaction ;
    document.getElementById("reactScore").innerHTML =  reactionScore + " / 100";
    document.getElementById("memory").innerHTML = memory ;
    document.getElementById("memoryScore").innerHTML =  memoryScore + " / 100";
    document.getElementById("verbal").innerHTML = verbal;
    document.getElementById("verbalScore").innerHTML =  verbalScore + " / 100";
    document.getElementById("visual").innerHTML = visual;
    document.getElementById("visualScore").innerHTML =  visualScore + " / 100";
}