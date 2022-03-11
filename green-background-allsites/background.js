function changePageColor() {
  document.body.style.backgroundColor = 'green';
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
