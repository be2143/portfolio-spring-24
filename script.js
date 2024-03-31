// Changing the word effect at the header
// Define an array with the words to cycle through
const words = ['UI/UX Design', 'Web Development', 'Software Engineering'];

// Get the span element where the text will change
const dynamicText = document.getElementById('dynamicText');

let index = 0;

// Function to change the text
function changeText() {
  dynamicText.textContent = words[index];
  index = (index + 1) % words.length; // Increment index and loop back to 0 if it exceeds the length of the array
}

// Call the changeText function every 2 seconds (adjust as needed)
setInterval(changeText, 500);


document.getElementById("readMore").addEventListener("click", function() {
    var moreAbout = document.getElementById("moreAbout");
    if (moreAbout.style.display === "none") {
        moreAbout.style.display = "block";
        document.getElementById("readMore").textContent = "read less";
    } else {
        moreAbout.style.display = "none";
        document.getElementById("readMore").textContent = "read more";
    }
});
