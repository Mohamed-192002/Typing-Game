window.addEventListener("load", game);

let time;
let score = 0;
const hard = document.querySelector("#success-outlined");
const medium = document.querySelector("#danger-outlined");
const easy = document.querySelector("#primary-outlined");
const wordInput = document.querySelector("#word-input");
const curWord = document.querySelector("#current-word");
const timeNow = document.querySelector("#t");
const relode = document.querySelector("btn");
const myScore = document.querySelector("#score");
const highScore = document.querySelector("#HighScore");
const all = document.querySelectorAll('input[type="radio"]');
const highScoreBtn = document.getElementById("HighGools");
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];
// random words
function randomWords(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  curWord.innerHTML = words[randomIndex];
}
// scape input
function scape() {
  if (wordInput.value === curWord.innerHTML) {
    return true;
  } else {
    return false;
  }
}
// test input
function testing() {
  if (scape()) {
    randomWords(words);
    wordInput.value = "";
    score++;
    myScore.innerHTML = score;
  }
}
// window.localStorage.clear();
// Local Storage
all.forEach(function (ele) {
  ele.addEventListener("click", (a) => {
    window.localStorage.setItem("checkValue", a.currentTarget.value);
  });
});

if (window.localStorage.getItem("checkValue")) {
  if (window.localStorage.getItem("checkValue") === "1") {
    hard.click();
    time = 10;
  } else if (window.localStorage.getItem("checkValue") === "2") {
    medium.click();
    time = 20;
  } else if (window.localStorage.getItem("checkValue") === "3") {
    easy.click();
    time = 30;
  }
} else {
  medium.click();
  time = 20;
}

function storeHighScore() {
  if (window.localStorage.getItem("checkValue") === "1") {
    if (score > window.localStorage.getItem("highHard")) {
      window.localStorage.setItem("highHard", score);
    }
  } else if (window.localStorage.getItem("checkValue") === "2") {
    if (score > window.localStorage.getItem("highMedium")) {
      window.localStorage.setItem("highMedium", score);
    }
  } else if (window.localStorage.getItem("checkValue") === "3") {
    if (score > window.localStorage.getItem("highEasy")) {
      window.localStorage.setItem("highEasy", score);
    }
  }
}
function countdown() {
  if (time > 0) {
    time--;
  }
  timeNow.innerHTML = time;
}
///////////////////////////
function checkStatus() {
  if (time === 0) {
    wordInput.disabled = true;
    wordInput.placeholder = "End Game";
    if (window.localStorage.getItem("checkValue") === "1") {
      highScore.innerHTML = window.localStorage.getItem("highHard");
      highScoreBtn.innerHTML = "High Score ( Hard )";
    } else if (window.localStorage.getItem("checkValue") === "2") {
      highScore.innerHTML = window.localStorage.getItem("highMedium");
      highScoreBtn.innerHTML = "High Score ( Medium )";
    }
    if (window.localStorage.getItem("checkValue") === "3") {
      highScore.innerHTML = window.localStorage.getItem("highEasy");
      highScoreBtn.innerHTML = "High Score ( Easy )";
    }
  }
  storeHighScore();
}

///////////////////////////////////////
function game() {
  randomWords(words);
  wordInput.addEventListener("input", testing);
  setInterval(countdown, 1000);
  setInterval(checkStatus);
}
///////////////////////////////////////
// window.localStorage.clear();
