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
  "runaway",
  "joke",
  "developer",
  "hero",
  "javascript",
  "echo",
  "siblings",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "css",
  "html",
  "ajax",
  "jquary",
  "angular",
  "vue",
  "name",
  "word",
  "hello",
  "world",
  "console",
  "object",
  "water",
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
    score = 0;
    wordInput.disabled = true;
    wordInput.placeholder = "End Game";
    if (window.localStorage.getItem("checkValue") === "1") {
      window.localStorage.getItem("highHard")
        ? (highScore.innerHTML = window.localStorage.getItem("highHard"))
        : (highScore.innerHTML = 0);
      highScoreBtn.innerHTML = "High Score ( Hard )";
    } else if (window.localStorage.getItem("checkValue") === "2") {
      window.localStorage.getItem("highMedium")
        ? (highScore.innerHTML = window.localStorage.getItem("highMedium"))
        : (highScore.innerHTML = 0);
      highScoreBtn.innerHTML = "High Score ( Medium )";
    } else if (window.localStorage.getItem("checkValue") === "3") {
      window.localStorage.getItem("highEasy")
        ? (highScore.innerHTML = window.localStorage.getItem("highEasy"))
        : (highScore.innerHTML = 0);
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
  wordInput.onpaste = (e) => e.preventDefault();
}
///////////////////////////////////////
// window.localStorage.clear();
