// content.js

// Function to format the date
function formatCurrentDate() {
  // Get the current date
  const today = new Date();
  
  // Get the month, day, and year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return formattedDate;
}

// Function to insert the date into a text box
function insertFormattedDate() {
  const formattedDate = formatCurrentDate();

  // Find the active/focused element (e.g., a text box)
  const activeElement = document.activeElement;

  // Check if the active element is an input field of type "text"
  if (activeElement && activeElement.tagName === 'INPUT' && activeElement.type === 'text') {
    activeElement.value = formattedDate; // Insert the formatted date into the text box
  } else {
    alert("Please focus on a text box first."); // Alert if no text box is focused
  }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "insertDate") {
    insertFormattedDate();
    sendResponse({ status: "Date inserted" });
  }
});
