const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('amazingbookstoreapp.onrender.com', 'https://amazingbookstore.onrender.com');

export default environmentUrls.get(window.location.hostname);