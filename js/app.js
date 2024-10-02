// JS File for ROCK PAPER SCISSORS
// ------------RPS------------- //

// Let's start with setting score to 0
let wins = 0;
let losses = 0;
let draws = 0;

// Function to load scores from cookies
function loadScores() {
  const cookies = document.cookie.split('; ');
  cookies.forEach(cookie => {
    const [name, value] = cookie.split('=');
    if (name === 'wins') wins = parseInt(value) || 0;
    else if (name === 'losses') losses = parseInt(value) || 0;
    else if (name === 'draws') draws = parseInt(value) || 0;
  });
  updateScoreDisplay();
}

// Function to save scores to cookies
function saveScores() {
  document.cookie = `wins=${wins}; path=/; max-age=31536000`; // 1 year
  document.cookie = `losses=${losses}; path=/; max-age=31536000`; // 1 year
  document.cookie = `draws=${draws}; path=/; max-age=31536000`; // 1 year
}

// Function to play the game
function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const aiChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  // Game logic to determine the outcome
  if (playerChoice === aiChoice) {
    result = "It is DRAW!";
    draws++;
  } else if (
    (playerChoice === 'rock' && aiChoice === 'scissors') ||
    (playerChoice === 'scissors' && aiChoice === 'paper') ||
    (playerChoice === 'paper' && aiChoice === 'rock')
  ) {
    result = "Congratulations, you won!";
    wins++;
  } else {
    result = "You lose! :(";
    losses++;
  }

  // Update the result and score in the HTML
  document.getElementById('result').textContent = `You chose ${playerChoice}, AI chose ${aiChoice}. ${result}`;

  // Save scores to cookies
  saveScores();
  updateScoreDisplay();
}

// Function to update score display in the HTML
function updateScoreDisplay() {
  document.getElementById('score').textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}

// Load scores when the page loads
window.onload = loadScores;
