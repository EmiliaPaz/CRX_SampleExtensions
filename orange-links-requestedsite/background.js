function changePageColor() {
  let links = document.links;
  for (var l = 0; l < links.length ; l++) {
    links[l].style.color = 'orange'
  }
}

chrome.webNavigation.onCommitted.addListener(async function(activeInfo) {
  try {
    let tab = await getCurrentTab();
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changePageColor
    });
  } catch (error) {
    console.log(error);
  }
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true};
  try {
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  } catch (error) {
    console.log(error);
  }
}
