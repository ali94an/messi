// Create and style a new button element
var button = document.createElement('button');
button.innerHTML = 'Change Color';
document.body.appendChild(button);

// Create and style a new text element
var text = document.createElement('h1');
text.innerHTML = 'Hello, World!';
document.body.appendChild(text);

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    // Change the color of the text between blue and red each time the button is clicked
    text.style.color = text.style.color === 'blue' ? 'red' : 'blue';
});
