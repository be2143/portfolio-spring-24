// Define an array with the words to cycle through
const words = ['Computer Science', 'Interactive Media'];

// Get the span element where the text will change
const dynamicText = document.getElementById('dynamicText');

let index = 0;

// Function to change the text
function changeText() {
  dynamicText.textContent = words[index];
  index = (index + 1) % words.length; // Increment index and loop back to 0 if it exceeds the length of the array
}

// Call the changeText function every 2 seconds (adjust as needed)
setInterval(changeText, 1000);



// Define an array with the words to cycle through
const words1 = ['UI/UX Design', 'Web Development', 'Software Engineering'];

// Get the span element where the text will change
const dynamicText1 = document.getElementById('dynamicText');

let index1 = 0;

// Function to change the text
function changeText() {
  dynamicText.textContent = words1[index1];
  index1 = (index1 + 1) % words1.length; // Increment index and loop back to 0 if it exceeds the length of the array
}

// Call the changeText function every 2 seconds (adjust as needed)
setInterval(changeText, 1000);
