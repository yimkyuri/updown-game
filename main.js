let pcNumber = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chancesArea = document.getElementById("chances-area");
let gameOver = false;
let history = [];

function play() {
    let userValue = userInput.value;
    if ( userValue < 1  || userValue > 100 || userValue == '' ) {
        resultArea.textContent = " 1~100 사이의 숫자를 입력해주세요."
        return
    }
    if ( history.includes(userValue) ) {
        resultArea.textContent = " 이미 사용한 숫자 입니다."
        return
    }

    chances --;
    chancesArea.textContent = `${chances}번의 기회가 남았습니다.`
    console.log("Chance", chances);

    if ( userValue > pcNumber ) {
        resultArea.textContent = "Down!"
    } else if ( userValue < pcNumber ) {
        resultArea.textContent = "Up!"
    } else {
        resultArea.textContent = "정답입니다!"
        gameOver = true;
    }
    history.push(userValue);
    console.log(history);

    if ( chances < 1  ) {
        gameOver = true;
    }

    if ( gameOver == true ) {
        playButton.disabled =  true;
    }

}

function reset() {
    userInput.value = "";
    resultArea.textContent = "결과가 이곳에 나옵니다."
    playButton.disabled =  false;
    randomNumber();
    history = [];
    gameOver = false;
}

function randomNumber() {
    pcNumber = Math.floor( Math.random() * 100 ) + 1;
    console.log ("정답", pcNumber);
    chances = 5;
    chancesArea.textContent = `${chances}번의 기회가 남았습니다.`
}


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = ""
})

randomNumber();