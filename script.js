document.addEventListener("DOMContentLoaded", function() {
    // Get the "Watch Video" button
    var watchVideoButton = document.querySelector(".card_run.btn.btn-success");
  
    // Get the "Close" button
    var closeButton = document.getElementById("btnClose");
  
    // Check if the "Watch Video" button exists and click it
    if (watchVideoButton) {
      watchVideoButton.click();
  
      // Wait for 17 minutes (1020000 milliseconds)
      setTimeout(function() {
        // Close the tab after 17 minutes
        window.close();
  
        // Click the "Close" button after closing the tab
        if (closeButton) {
          closeButton.click();
        }
      }, 1020000);
    }
  });
