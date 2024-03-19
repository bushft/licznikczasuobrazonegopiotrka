document.addEventListener("DOMContentLoaded", function() {
  // Set the start time
  const startTime = new Date("March 18, 2024 11:58:00").getTime();

  // Update the timer every second
  setInterval(function() {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the time difference
    const difference = now - startTime;
    
    // Calculate time components
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Display the timer
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000); // Update every second
});
