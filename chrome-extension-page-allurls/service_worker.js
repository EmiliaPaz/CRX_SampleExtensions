chrome.runtime.onInstalled.addListener(init);

function init() {
  chrome.tabs.update({url:chrome.runtime.getURL("site.html")});
}