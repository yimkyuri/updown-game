let pcNumber = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let notice = document.getElementById("notice");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chancesArea = document.getElementById("chances-area");
let gameOver = false;
let history = [];
let visualImg = document.getElementById("visual-img");

function play() {
    let userValue = userInput.value;
    if ( userValue < 1  || userValue > 100 || userValue == '' ) {
        notice.textContent = "[ ! ] 1~100 사이의 숫자를 입력해주세요."
        return
    }
    if ( history.includes(userValue) ) {
        notice.textContent = "[ ! ] 이미 사용한 숫자 입니다."
        return
    } 

    chances --;
    chancesArea.textContent = chances
    console.log("Chance", chances);

    if ( userValue > pcNumber ) {
        // notice.textContent = "Down!"
        visualImg.src = "img/img3.jpg";
    } else if ( userValue < pcNumber ) {
        // notice.textContent = "Up!"
        visualImg.src = "img/img2.jpg";
    } else {
        // notice.textContent = "정답입니다!"
        visualImg.src = "img/img4.jpg";
        gameOver = true;
    }
    history.push(userValue);
    console.log(history);

    if ( chances < 1  ) {
        gameOver = true;
    }

    if ( gameOver == true ) {
        playButton.disabled =  true;
        if ( userValue != pcNumber ) {
            visualImg.src = "img/img5.jpg";
        }
    }

}

function reset() {
    userInput.value = "";
    visualImg.src = "img/img1.jpg";
    playButton.disabled =  false;
    randomNumber();
    history = [];
    gameOver = false;
    notice.textContent = ""
}

function randomNumber() {
    pcNumber = Math.floor( Math.random() * 100 ) + 1;
    console.log ("정답", pcNumber);
    chances = 5;
    chancesArea.textContent = chances
}


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = ""
})

randomNumber();