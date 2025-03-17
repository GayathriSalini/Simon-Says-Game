let gameSeq=[];
let userSeq=[];

let btns=["blue","lblue","purple","vilot"]

let started=false;
let level=0;

let h2=document.querySelector("h2");

//step 1
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

//step 2
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText=`level ${level}`

    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randbtn);
}

//step 3
function checkAns(idx) { //checking the userSeq and gameSeq
     //console.log("current level: ", level)
    //let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]){
        //console.log("same value")
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            //levelUp();
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}  

function btnPress() {
    let btn = this;
    userFlash(btn);
    //console.log(this)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);
   
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

//reset
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}