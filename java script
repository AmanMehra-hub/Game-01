const btn = document.querySelector("button");
const targetColorBox = document.querySelector("#highlight-color");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#scorer");
const highScoreDisplay = document.querySelector("#high-score");


function play() {
    time = 30;
    score = 0;
    let timer;
    timeDisplay.innerText = time;
    scoreDisplay.innerText = score;
    clearInterval(timer);
    createGrid();
    timer = setInterval(() => {
        time--;
        timeDisplay.innerText = time;
        if (time === 0) {
            clearInterval(timer);
            alert("⌛Time's up! 🏆Your Score : " + score);
            location.reload();
            return 0;
        }
    }, 1000);
    return 0;
};


let randNum = (val) => {
    return Math.floor(Math.random() * (val + 1));
}

let rndColor = () => {
    let color01 = rgb(${randNum(255)} ${randNum(255)} ${randNum(255)});
    return color01;
}

function colorArr() {
    let colors = [16];
    for (let i = 0; i < 16; i++) {
        let clrs = rndColor();
        colors[i] = clrs;
    }
    return colors;
};

const createGrid = () => {
    const color = colorArr();
    const gridContent = document.getElementById("grid-box");
    gridContent.innerText = "";
    gridContent.style.border = "none";
    let targetColor = color[randNum(15)];
    targetColorBox.style.backgroundColor = targetColor;
    targetColorBox.innerText = "";
    color.forEach((color, targetClr) => {
        const gridBox = document.createElement("div");
        gridBox.className = "box";
        gridContent.prepend(gridBox);
        gridBox.style.backgroundColor = color;
        gridBox.addEventListener('click', () => { clickCheck(color, targetColor); })
    });
    return 0;
};



function clickCheck(clickedColor, targetClr) {
    
    if (clickedColor === targetClr)
        score++;
    else if (score === 0) 
        score = 0;
    else
        score--;
    score>0 ? scoreDisplay.style.color="rgb(81, 234, 10)": scoreDisplay.style.color="red";
    scoreDisplay.innerText = score;
    createGrid();
    return 0;
};
