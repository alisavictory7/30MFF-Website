
// Initialize audio for win sound effect
const winSound = new Audio('media/588234__mehraniiii__win.wav');

// --- Image Slideshow Functionality ---
let slideIndex = 1; // Initialize slide index to start from the first slide
showSlides(slideIndex); // Display the initial slide

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n); // Increment/decrement slide index and show the slide
}

// Function to set the current slide based on dot click
function currentSlide(n) {
  showSlides(slideIndex = n); // Set slide index to the clicked dot number and show the slide
}

// Function to display slides and update dot indicators
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides" (slides)
  let dots = document.getElementsByClassName("dot"); // Get all elements with class "dot" (slide indicators)
  if (n > slides.length) {slideIndex = 1} // If slide index exceeds number of slides, reset to the first slide
  if (n < 1) {slideIndex = slides.length} // If slide index is less than 1, set to the last slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide (index is 1-based)
  dots[slideIndex-1].className += " active"; // Add "active" class to the current slide's dot indicator
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