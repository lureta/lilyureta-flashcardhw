//flashcard data 
//const flascard - defines an array of objects
const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    cardContent = document.getElementById('card-content');
    currentCard = flashcards[currentIndex];

    if (cardContent) {
        if (showingTerm) {
            cardContent.textContent = currentCard.term;
        } else {
            cardContent.textContent = currentCard.definition;
        }
    }
}

// The rest of the code you will write is apart of event listeners
// Event listener for flipping the flashcard
document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm;  // Toggle between term and definition
    displayCard();  // Update the card display
});

// Event listener for the "Next" button
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcards.length;  // Move to next card
    showingTerm = true;  // Always start by showing the term
    displayCard();  // Update the card display
});

// Event listener for the "Previous" button
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;  // Move to previous card
    showingTerm = true;  // Always start by showing the term
    displayCard();  // Update the card display
});

// Event listener for adding a new card
document.getElementById('add-card-btn').addEventListener('click', function() {
    const newTerm = document.getElementById('new-term').value;
    const newDefinition = document.getElementById('new-definition').value;

    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
        alert('New flashcard added!');
    } else {
        alert('Please enter both a term and a definition.');
    }
});

// This line will display the card when the page is refreshed
window.onload = displayCard;