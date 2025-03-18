const head = document.getElementById("head");
const tail = document.getElementById("tail");
const reset = document.getElementById("reset");

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draw: 0,
};

function onHead() {
  playGame(head);
}

function onTail() {
  playGame(tail);
}

function playGame(toss) {
  const playerMove = Math.random();
  const computerMove = Math.random();
  let result;

  if (computerMove > playerMove) {
    result = "I Win";
    score.wins += 1;
  } else {
    result = "You Win";
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  if ((toss === head) & (result === "I Win")) {
    alert(`You played Head BUT I landed ontop ${result}
        Wins: ${score.wins}, Losses:${score.losses}`);
  } else if (toss === head && result === "You Win") {
    alert(`You played Head and landed ontop ${result}
        Wins: ${score.wins}, Losses:${score.losses}`);
  } else if ((toss === tail) & (result === "I Win")) {
    alert(`You played Tail BUT I landed ontop ${result}
        Wins: ${score.wins}, Losses:${score.losses}`);
  } else if (toss === tail && result === "You Win") {
    alert(`You played Tail and landed ontop ${result}
        Wins: ${score.wins}, Losses:${score.losses}`);
  }
}

function onReset() {
  (score.wins = 0),
    (score.losses = 0),
    alert(`Game Reset
    Wins: ${score.wins}, Losses:${score.losses}`);

  localStorage.removeItem("score");
}

head.addEventListener("click", onHead);
tail.addEventListener("click", onTail);
reset.addEventListener("click", onReset);
