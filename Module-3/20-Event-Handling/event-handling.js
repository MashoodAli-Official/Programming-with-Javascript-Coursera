// 1. Select the elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

// 2. Define the event handler function
function changeText() {
  paragraph.textContent = 'The button was clicked! 🎉';
}

// 3. Attach the event listener
button.addEventListener('click', changeText);