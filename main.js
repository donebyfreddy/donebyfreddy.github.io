let counter = 1000; // Initialize the counter to 1

function increaseCounter() {
  counter++; // Increase counter by 1
  document.getElementById("counterValue").textContent = counter; // Update counter in the page
  document.getElementById("counterValueDisplay").textContent = counter; // Update another counter display
}
