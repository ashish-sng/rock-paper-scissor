// Define possible choices for the game
const choices = ["rock", "paper", "scissor"];

// Generating a random choice for the computer player
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// images click event
let rock = document.getElementById("fist");
let paper = document.getElementById("hand");
let scissor = document.getElementById("scissor");
let pc;

// scores functions
let userScore = 0;
function changeUserScore(uscore) {
  document.getElementById("mscore").innerHTML = uscore;
}
let pcScore = 0;
function changePcScore(pscore) {
  document.getElementById("cscore").innerHTML = pscore;
}

// Getting ID's

let userrock = document.getElementById("fistwinuser");
let userpaper = document.getElementById("handwinuser");
let userscissor = document.getElementById("scissorwinuser");

let pcrock = document.getElementById("fistwinpc");
let pcpaper = document.getElementById("handwinpc");
let pcscissor = document.getElementById("scissorwinpc");

const footer = document.getElementById("foot");
const left = document.getElementById("leftd");
const right = document.getElementById("rightd");
const text3 = document.getElementById("winlosetext");

const nextbtn = document.getElementById("nextbtn");

// Very Important ID'd
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");

let playbtn = document.getElementById("playbtn");

//  Rules button and Boxes 
const toggleBtn = document.getElementById('btn');
const toggleDiv = document.getElementById('rule');
const cross = document.getElementById('cross');

toggleBtn.addEventListener('click', () => {
  console.log('clicked');
  toggleDiv.classList.remove('hidden');
  cross.classList.remove('hidden');
});

cross.addEventListener('click', () => {
  toggleDiv.classList.add('hidden');
  cross.classList.add('hidden');
});

playbtn.addEventListener("click", function () {
  playbtn.classList.add("hidden");
  nextbtn.classList.add("hidden");
  text3.classList.add("hidden");
  footer.classList.remove("hidden");
  left.classList.add("hidden");
  right.classList.add("hidden");

  userrock.classList.add("hidden");
  userpaper.classList.add("hidden");
  userscissor.classList.add("hidden");

  pcrock.classList.add("hidden");
  pcpaper.classList.add("hidden");
  pcscissor.classList.add("hidden");
});



function afterclick(){
  text3.classList.remove("hidden");
  playbtn.classList.remove("hidden");
  footer.classList.add("hidden");
  left.classList.remove("hidden");
  right.classList.remove("hidden");
}

function win () {
  document.getElementById("text1").innerHTML = "You WIN";
  playbtn.innerHTML = "Play Again";
  nextbtn.classList.remove("hidden");
}

function lose () {
  document.getElementById("text1").innerHTML = "You LOSE";
  playbtn.innerHTML = "Play Again";
}

function tie () {
  document.getElementById("text1").innerHTML = "Tie UP";
  playbtn.innerHTML = "Replay";
}

nextbtn.addEventListener("click", function () {
  nextbtn.classList.add("hidden");
  cont1.classList.add("hidden");
  cont2.classList.remove("hidden");
});

rock.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userrock.classList.remove("hidden");
  if(pc === "rock"){
    pcrock.classList.remove("hidden");
    tie();
  }else if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    lose();
    pcScore++;
    changePcScore(pcScore);
  }else{
    pcscissor.classList.remove("hidden");
    win();
    userScore++;
    changeUserScore(userScore);
  }
});

paper.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userpaper.classList.remove("hidden");
  if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    tie();
  }else if(pc === "scissor"){
    lose();
    pcscissor.classList.remove("hidden");
    pcScore++;
    changePcScore(pcScore);
  }else{
    win();
    userScore++;
    changeUserScore(userScore);
    pcrock.classList.remove("hidden");
  }
});

scissor.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userscissor.classList.remove("hidden");
  if(pc === "scissors"){
    pcscissor.classList.remove("hidden");
    tie();
  }else if(pc === "rock"){
    lose();
    pcScore++;
    changePcScore(pcScore);
    pcrock.classList.remove("hidden");
  }else{
    win();
    userScore++;
    changeUserScore(userScore);
    pcpaper.classList.remove("hidden");
  }
});
