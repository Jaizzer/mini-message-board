const express = require('express');
require('dotenv').config();
const path = require('node:path');

// Setup async handler for handling errors
const asyncHandler = require('express-async-handler');
const newRouter = require('./routes/newRouter');

// Setup the server
const app = express();
const PORT = process.env.PORT || 4444;
app.listen(process.env.PORT, (error) => {
	if (!error) {
		console.log(`Server is now running on http://localhost:${PORT}`);
	} else {
		console.error(error);
	}
});

// Setup ejs engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Message data
const messages = [
	{
		text: 'Hi there!',
		user: 'Armando',
		added: new Date(),
	},
	{
		text: 'Hell World!',
		user: 'Charles',
		added: new Date(),
	},
];

// Render the messages to the user at '/'
app.get(
	'/',
	asyncHandler((req, res) => {
		// Render the index page
		res.render('index', { messages });
	})
);

// Setup 'new' router
app.use('/new', newRouter);

// Error handler
app.use((err, req, res, next) => {
	res.status(404).send(err.message);
});
