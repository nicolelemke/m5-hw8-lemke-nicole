// Create an Array of at least 3 losing messages
var losingmessage = [
    "Sorry, not today!",
    "Maybe next time.",
    "You have lost.",
]

// Create variables to count wins and losses
var wincount = 0
var losecount = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var displayedmessage = document.getElementById('message');
var displayedwincount = document.getElementById('wins');
var displayedlosecount = document.getElementById('losses');

// target all .box elements and attach a click event listener to each one using a loop

var boxbtns = document.querySelectorAll('.box');

for (var i = 0; i <boxbtns.length; i++) {
    var box = boxbtns[i]
    box.onclick = boxclickhandler
}
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

function boxclickhandler(event) {
    var boxindex = parseInt(this.textContent);
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
    var winningbox = Math.floor((Math.random() * 3) +1);
// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
    if (boxindex === winningbox) {
        displayedmessage.textContent = "Winner, Winner, Winner!"
        wincount += 1
        displayedwincount.textContent = wincount
    }
 // if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
    else {
        displayedmessage.textContent = losingmessage[Math.floor((Math.random() * 3))];
        losecount += 1
        displayedlosecount.textContent = losecount
    }
}
