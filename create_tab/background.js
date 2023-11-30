// Result: Menu closed when changing tabs.
// chrome.runtime.onInstalled.addListener(function(details) {
//   setTimeout(() => {
//     chrome.tabs.create({
//       url: 'https://google.com',
//       active: true
//     })
//   }, 5000)

// })

// Result: Menu closed when changing tabs.
// chrome.runtime.onInstalled.addListener(function(details) {
//   setTimeout(() => {
//     chrome.windows.create(
//     {
//       focused : true,
//       url: 'https://google.com'
//     },
//     console.log('yey'))
//   }, 5000)
// })


// Result: Menu closed when changing tabs.
chrome.runtime.onInstalled.addListener(function(details) {
  setTimeout(() => {
    chrome.tabs.highlight({
      tabs: 2
    })
  }, 5000)

})

