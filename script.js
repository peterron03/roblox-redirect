// Get query parameters
const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get('place');
const jobId = urlParams.get('job');

// Function to validate Place ID (must be a positive integer)
function isValidPlaceId(id) {
  return /^\d+$/.test(id);
}

// Function to validate Job ID (must be a 32-character alphanumeric string)
function isValidJobId(id) {
  return /^[0-9a-fA-F]{32}$/.test(id);
}

if (isValidPlaceId(placeId) && isValidJobId(jobId)) {
  // Build Roblox deep link and redirect
  const robloxUrl = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`;
  window.location.href = robloxUrl;
} else {
  // Show error message if invalid
  document.body.innerHTML = `
    <p style="font-size:18px; color:red;">
      Invalid link.<br>
      Make sure <b>place</b> is a number and <b>job</b> is a valid 32-character ID.
    </p>
  `;
}
