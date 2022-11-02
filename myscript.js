//alert("hello");
const jumpSound = new Audio("jump.mp3");
const gameOverSound = new Audio("gameover.mp3");
let gameEver2 = document.getElementById("gameEver2");
let Ever2 = document.getElementById("Ever2");


function jump() {

    jumpSound.play();
    if (gameEver2.classList != "animate") {
        gameEver2.classList.add("animate");
    }

    setTimeout(function () {
        gameEver2.classList.remove("animate");
    }, 500)
}

let check = setInterval(function () {

    let gameEver2Top = parseInt(window.getComputedStyle(gameEver2).getPropertyValue("Top"))

    let Ever2Left = parseInt(window.getComputedStyle(Ever2).getPropertyValue("left"));

    if (Ever2Left < 20 && Ever2Left > 0 && gameEver2Top >= 130) {
        Ever2.style.animation = "none";
        Ever2.style.display = "none";
        gameOverSound.play();
        alert("u loose");
        return;
    }

}, 100);
