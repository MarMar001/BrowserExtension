// This is the service worker for your extension
console.log("Service worker is active.");

// Handle the install event
self.addEventListener('install', (event) => {
  console.log('Service worker installed.');
});

// Handle the activate event
self.addEventListener('activate', (event) => {
  console.log('Service worker activated.');
});

// Handle fetch events (this can be extended as needed)
self.addEventListener('fetch', (event) => {
  console.log('Fetch event for ', event.request.url);
});
