// Array of quotes to be displayed
var quotes = [
  "A room without books is like a body without a soul. ― Marcus Tullius Cicero",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. ― J.K. Rowling, Harry Potter and the Goblet of Fire",
  "If you tell the truth, you don't have to remember anything. ― Mark Twain",
  "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. ― Maurice Switzer, Mrs. Goose, Her Book",
  "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). ― Mark Twain",
  "The man who does not read has no advantage over the man who cannot read. ― Mark Twain",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go... ― Dr. Seuss, Oh, the Places You’ll Go!",
];

// Variable to store the index of the last quote displayed
var lastQuoteIndex = -1;

// Function to generate a random quote and display it
function generateQuote() {
  // Initialize a variable to store the random index
  var randomIndex;

  // Keep generating a random index until it's different from the last one
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);

  // Update the last quote index
  lastQuoteIndex = randomIndex;

  // Select the random quote from the array
  var randomQuote = quotes[randomIndex];

  // Display the random quote on the webpage
  document.getElementById("quote").textContent = randomQuote;
}
