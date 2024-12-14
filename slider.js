// Get all images
var images = document.querySelectorAll('.slider img');
// Set the index of the first active image
var currentImageIndex = 0;
// Set the interval time in milliseconds
var intervalTime = 9000;

// Set the active class on the first image
images[currentImageIndex].classList.add('active');

// Function to change the active image
function changeImage() {
  // Remove the active class from the current image
  images[currentImageIndex].classList.remove('active');
  // Increment the current image index
  currentImageIndex++;
  // If the current image index is greater than or equal to the number of images, reset it to 0
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  // Add the active class to the new current image
  images[currentImageIndex].classList.add('active');
}

// Call the changeImage function every interval time
setInterval(changeImage, intervalTime);
