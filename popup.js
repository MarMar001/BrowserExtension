document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('insertDate');
  if (button) {
    button.addEventListener('click', () => {
      // Send a message to the background script
      chrome.runtime.sendMessage({ action: 'insertDate' });
    });
  } else {
    console.error('Button with id "insertDate" not found.');
  }
});
