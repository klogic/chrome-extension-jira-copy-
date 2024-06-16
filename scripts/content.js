function getCurrentUrl() {
  return window.location.href;
}

const execCopy = async (evt) => {
  const link = getCurrentUrl();
  const title = document.getElementsByTagName("title")[0].innerText;
  const template = `<a href='${link}'>${title}</a>`;

  const TYPE = "text/html";
  const BLOB = new Blob([template], { type: TYPE });
  return await navigator.clipboard
    .write([new ClipboardItem({ [TYPE]: BLOB })])
    .then(
      () => alert("Copied to clipboard."),
      (err) => console.log(err)
    );
};

// chrome.runtime.sendMessage({ message: "init" });

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.message === "messageSent") {
    await execCopy();
  }
});
