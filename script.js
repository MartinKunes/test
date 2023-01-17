var diff = 3;
var colors = [];
var vyber;
var colorBox = document.querySelectorAll(".barvy");
var popis = document.getElementById("popis");
var rf = document.querySelector("#rf");
var resetB = document.querySelector("#reset");
var modB = document.querySelectorAll(".d");
var hex = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];

initiate();
function initiate(){
    setupModBu();
    setupBox();
    reset();
}

function pickRandomColor(){
    var random = Math.floor(Math.random() * barvicky.length);
    return barvicky[random];
}


function generateRandomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var hex1 = hex[Math.floor(Math.random() * hex.length)];
    var hex2 = hex[Math.floor(Math.random() * hex.length)];
    var hex3 = hex[Math.floor(Math.random() * hex.length)];
    var hex4 = hex[Math.floor(Math.random() * hex.length)];
    var hex5 = hex[Math.floor(Math.random() * hex.length)];
    var hex6 = hex[Math.floor(Math.random() * hex.length)];
    return "#" + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;
}

function reset(){
    barvicky = generateRandomColor(pocet);

    vyber = pickRandomColor();

    popis.textContent = vyber;
    resetB.textContent = "Reset";
    for(var i = 0; i < colorBox.length; i++){
        if(barvicky[i]){
            colorBox[i].style.display = "block";
            colorBox[i].style.background = barvicky[i];
        }else{
            colorBox[i].style.display = "none;"
        }
    }
}

resetB.addEventListener("click", function() {
    reset();
})

function setupModBu(){
    for(var i = 0; i < modB.length; i++){
        modB[i].addEventListener("click", function(){
            modB[0].classList.remove("selected");
            modB[1].classList.remove("selected");
            modB[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                colors = [];
    colorBox.innerHTML = "";
    diff = 3;
            } else if(this.textContent === "Medium"){
                colors = [];
    colorBox.innerHTML = "";
    diff = 6;
            }else {
                colors = [];
    colorBox.innerHTML = "";
    diff = 9;
            }
            reset();
        });
    }
}

function setupBox(){
    for(var i = 0; i < colorBox.length; i++){
        colorBox[i].addEventListener("click", function () {
            var rgb = this.style.background;
            function rgbhex(rgb){
                if(rgb.search("rgb") == -1) {
                    return rgb;
                }else{
                    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

                    function hexx(x){
                        return("0" + parseInt(x).toString(16)).slice(-2);
                    }
                    return"#" + hexx(rgb[1]) + hexx(rgb[2]) + hexx(rgb[3]);
                }
            }
            var klik = rgbhex(rgb);

            console.log(klik, vyber);
            if(klik === vyber){
                rf.textContent = "Correct!!!";
                resetB.textContent="Play Again??"
            }else{
                this.style.background = "#232323"
                rf.textContent = "Try Again";
            }
        });
    }
}

