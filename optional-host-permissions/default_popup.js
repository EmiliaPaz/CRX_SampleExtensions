let permissionsButton = document.getElementById("permissionsButton");

function addDiv(content) {
  let div = document.createElement("div");
div.textContent = content;
document.body.appendChild(div);
}

permissionsButton.addEventListener("click", async () => {
   // Permissions must be requested from inside a user gesture, like a button's
  // click handler.
  chrome.permissions.request({
    origins: ["https://example.com/*"]
  }, (granted) => {
    // The callback argument will be true if the user granted the permissions.
    if (granted) {
      console.log('permission granted');
      addDiv('granted');
    } else {
      console.log('permission denied');
      addDiv('denied');
    }
  });
});
