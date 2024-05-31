// Get all elements
const elements = document.querySelectorAll(".element");

// Add animation class to make them move right to left in a loop
elements.forEach(element => {
  element.classList.add('move-right-to-left');
});