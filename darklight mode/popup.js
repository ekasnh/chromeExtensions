// Get the invert button element by its ID
const invertButton = document.getElementById("invertButton");

// When the button is clicked, send a message to the content script to invert the colors
invertButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: invertColors,
    });
  });
});

// Function to invert colors in the content script
function invertColors() {
  document.body.style.filter = "invert(100%)";
}
