// Initialize audio (place at top of script.js)
const winSound = new Audio('media/588234__mehraniiii__win.wav');



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Game Popup


// Modified event handler for special objects
document.querySelectorAll('.room1-special-object').forEach(button => {
  button.addEventListener('click', function() {
      const popup = this.querySelector('.popuptext');
      const firstClick = !this.dataset.clicked; // Add this line

      // Toggle popup on every click
      popup.classList.toggle('show');
      
      // Play sound only on popup open
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0;
          winSound.play().catch(error => console.log('Audio play failed:', error));
      }
      
      // Show modal only on first click
      if (firstClick) {
          const modal1 = document.getElementById("congrats-modal-room1");
          modal1.style.display = "block";
          this.dataset.clicked = "true";
      }
  });
});



// Modified event handler for special objects
document.querySelectorAll('.room2-special-object').forEach(button => {
  button.addEventListener('click', function() {
      const popup = this.querySelector('.popuptext');
      const firstClick = !this.dataset.clicked;
      
      // Toggle popup on every click
      popup.classList.toggle('show');
      
      // Play sound only on popup open
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0;
          winSound.play().catch(error => console.log('Audio play failed:', error));
      }
      
      // Show modal only on first click
      if (firstClick) {
          const modal2 = document.getElementById("congrats-modal-room2");
          modal2.style.display = "block";
          this.dataset.clicked = "true";
      }
  });
});



// Modified event handler for special objects
document.querySelectorAll('.room3-special-object').forEach(button => {
  button.addEventListener('click', function() {
      const popup = this.querySelector('.popuptext');

      const firstClick = !this.dataset.clicked;
      
      // Toggle popup on every click
      popup.classList.toggle('show');
      
      // Play sound only on popup open
      if (popup.classList.contains('show')) {
          winSound.currentTime = 0;
          winSound.play().catch(error => console.log('Audio play failed:', error));
      }
      
      // Show modal only on first click
      if (firstClick) {
          const modal3 = document.getElementById("congrats-modal-room3");
          modal3.style.display = "block";
          this.dataset.clicked = "true";
      }
  });
});



// Get all close buttons
const closeSpans = document.getElementsByClassName("close");

// Properly handle each modal's close button
document.getElementById("congrats-modal-room1").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room1").style.display = "none";
});

document.getElementById("congrats-modal-room2").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room2").style.display = "none";
});

document.getElementById("congrats-modal-room3").querySelector(".close").addEventListener("click", () => {
    document.getElementById("congrats-modal-room3").style.display = "none";
});

