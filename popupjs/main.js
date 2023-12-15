// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Select the popup element
  const popup = document.getElementById('popup');

  // Delayed function to open the popup
  function delayedOpenPopup() {
    setTimeout(function () {
      openPopup();
    }, 2000); // 2000 milliseconds = 2 seconds
  }

  // Function to open the popup
  function openPopup() {
    popup.classList.add('open-popup');
  }

  // Function to close the popup with a delay
  function closePopupWithDelay() {
    // Add a delay before removing the 'open-popup' class
    setTimeout(function () {
      popup.classList.remove('open-popup');
    }, 600); // Adjust the delay time as needed (in milliseconds)
  }

  // Open the popup automatically after 2 seconds
  delayedOpenPopup();

  // Close the popup when the "OK" button is clicked
  document.getElementById('okButton').addEventListener('click', closePopupWithDelay);
});
