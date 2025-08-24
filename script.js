// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get('place');
const jobId = urlParams.get('job');

if (placeId && jobId) {
  // Build Roblox deep link
  const robloxUrl = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`;
  window.location.href = robloxUrl;
} else {
  document.body.innerHTML = `<p style="font-size:18px;color:red;">
    Invalid link. Make sure to include <b>place</b> and <b>job</b> parameters.
  </p>`;
}
