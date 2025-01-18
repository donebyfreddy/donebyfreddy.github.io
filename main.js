// Get the counter from local storage or initialize it to 1000 if not present
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 1000;

// Increase the counter by 1
counter++;

// Save the updated counter back to local storage
localStorage.setItem('counter', counter);

// Display the counter on the page
document.getElementById("counterValueDisplay").textContent = counter;
