const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
var favicon = require('serve-favicon');


// Static Files Start
app.use(express.static(path.join(__dirname, 'public')));
// Static Files End


// Favicon Start
app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.png')));
// Favicon End


// URL Routes Start
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// URL Routes End


// Error Handling Start
app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
// Error Handling End


// Port Configuration Start
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
// Port Configuration End