
// Initialize audio for win sound effect
const winSound = new Audio('media/588234__mehraniiii__win.wav');

let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
let dotClasses = ["dot1", "dot2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}


function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotClasses[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Deactivate all dots
  Array.from(dots).forEach(dot =>
    dot.className = dot.className.replace(" active", ""));

  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}

// --- Game Popup and Modal Logic for Room 1 ---
document.querySelectorAll('.room1-special-object').forEach(button => { // Select all elements with class "room1-special-object"
  button.addEventListener('click', function() { // Add click event listener to each special object in room 1
      const popup = this.querySelector('.popuptext'); // Find the popup element within the clicked object
      const firstClick = !this.dataset.clicked; // Check if this is the first click on this object

      // Toggle the visibility of the popup text on each click
      popup.classList.toggle('show');

      // Play win sound only when the popup is shown (opened)
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0; // Reset sound to the beginning before playing
          winSound.play().catch(error => console.log('Audio play failed:', error)); // Play win sound and handle potential errors
      }

      // Show the congratulatory modal for room 1 only on the first click
      if (firstClick) {
          const modal1 = document.getElementById("congrats-modal-room1"); // Get the modal element for room 1
          modal1.style.display = "block"; // Display the modal
          this.dataset.clicked = "true"; // Mark this object as clicked using dataset
      }
  });
});

// --- Game Popup and Modal Logic for Room 2 ---
document.querySelectorAll('.room2-special-object').forEach(button => { // Select all elements with class "room2-special-object"
  button.addEventListener('click', function() { // Add click event listener to each special object in room 2
      const popup = this.querySelector('.popuptext'); // Find the popup element within the clicked object
      const firstClick = !this.dataset.clicked; // Check if this is the first click on this object

      // Toggle the visibility of the popup text on each click
      popup.classList.toggle('show');

      // Play win sound only when the popup is shown (opened)
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0; // Reset sound to the beginning before playing
          winSound.play().catch(error => console.log('Audio play failed:', error)); // Play win sound and handle potential errors
      }

      // Show the congratulatory modal for room 2 only on the first click
      if (firstClick) {
          const modal2 = document.getElementById("congrats-modal-room2"); // Get the modal element for room 2
          modal2.style.display = "block"; // Display the modal
          this.dataset.clicked = "true"; // Mark this object as clicked using dataset
      }
  });
});

// --- Game Popup and Modal Logic for Room 3 ---
document.querySelectorAll('.room3-special-object').forEach(button => { // Select all elements with class "room3-special-object"
  button.addEventListener('click', function() { // Add click event listener to each special object in room 3
      const popup = this.querySelector('.popuptext'); // Find the popup element within the clicked object
      const firstClick = !this.dataset.clicked; // Check if this is the first click on this object

      // Toggle the visibility of the popup text on each click
      popup.classList.toggle('show');

      // Play win sound only when the popup is shown (opened)
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0; // Reset sound to the beginning before playing
          winSound.play().catch(error => console.log('Audio play failed:', error)); // Play win sound and handle potential errors
      }

      // Show the congratulatory modal for room 3 only on the first click
      if (firstClick) {
          const modal3 = document.getElementById("congrats-modal-room3"); // Get the modal element for room 3
          modal3.style.display = "block"; // Display the modal
          this.dataset.clicked = "true"; // Mark this object as clicked using dataset
      }
  });
});

// --- Modal Close Button Functionality ---
const closeSpans = document.getElementsByClassName("close"); // Get all elements with class "close" (close buttons - not used effectively in the final code)

// Event listener to close the modal for room 1
document.getElementById("congrats-modal-room1").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room1").style.display = "none"; // Hide the modal for room 1 when its close button is clicked
});

// Event listener to close the modal for room 2
document.getElementById("congrats-modal-room2").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room2").style.display = "none"; // Hide the modal for room 2 when its close button is clicked
});

// Event listener to close the modal for room 3
document.getElementById("congrats-modal-room3").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room3").style.display = "none"; // Hide the modal for room 3 when its close button is clicked
});