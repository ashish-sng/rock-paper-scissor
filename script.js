// Define possible choices for the game
const choices = ["rock", "paper", "scissors"];

// Generate a random choice for the computer player
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}































const toggleBtn = document.getElementById('btn');
const toggleDiv = document.getElementById('rule');
const cross = document.getElementById('cross');

toggleBtn.addEventListener('click', () => {
  toggleDiv.classList.remove('hidden');
  cross.classList.remove('hidden');
});

cross.addEventListener('click', () => {
  toggleDiv.classList.add('hidden');
  cross.classList.add('hidden');
});