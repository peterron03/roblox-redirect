// Get query parameters
const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get('place');
const jobId = urlParams.get('job');

// Function to validate Place ID (positive integer)
function isValidPlaceId(id) {
  return /^\d+$/.test(id);
}

// Function to validate Job ID (UUID with dashes)
function isValidJobId(id) {
  // Matches a standard UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}

if (isValidPlaceId(placeId) && isValidJobId(jobId)) {
  // Build Roblox deep link
  const robloxUrl = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`;

  // Redirect to Roblox
  window.location.href = robloxUrl;

  // Try to close the page after redirect
  setTimeout(() => {
    window.close();
    document.body.innerHTML = `
      <p style="font-size:18px; color:green;">
        Roblox should have opened. You can safely close this tab now.
      </p>
    `;
  }, 1000);
} else {
  // Invalid ID message
  document.body.innerHTML = `
    <p style="font-size:18px; color:red;">
      Invalid link.<br>
      Make sure <b>place</b> is a number and <b>job</b> is a valid Roblox Job ID.
    </p>
  `;
}
