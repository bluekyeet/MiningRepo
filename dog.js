document.addEventListener("DOMContentLoaded", function() {
  if (typeof adBlockDetector === "undefined") {
    setTimeout(function() {
      location.reload();
    }, 5000);
  }
});
