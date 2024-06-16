// var contentTabId;

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message == "init") {
//     contentTabId = sender.tab.id;
//   }
// });

chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, {
    message: "messageSent",
  });
});
