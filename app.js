let gameSeq = [];
let userSeq = [];
let highScore = 0;

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;




document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        
        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    }, 250);
}

function levelUP(){
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);

    if(level > highScore){
        highScore = level;
    }
}

function checkAns(idx){


    if( userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}<b> <br/> And High Score was ${highScore} Press any key to start`
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        }, 150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

