//Letters
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Initial Score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Computer random generation
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



//Users Guesses 
var guessesLeft1 = function() {
  document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var letterToGuess1 = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var guessesSoFar1 = function() { 
  document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};



// Reset
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  letterToGuess1();
  GuessesLeft1();
  guessesSoFar1();
}

letterToGuess1();
guessesLeft1();


//User press key
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  guessesLeft1();
  guessesSoFar1();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("You are psychic! Do you want a job?");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, go home");
            reset();
        }
};