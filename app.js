const express = require('express');
require('dotenv').config();
const path = require('node:path');
const { Router } = require('express');

// Setup async handler for handling errors
const asyncHandler = require('express-async-handler');

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

// Setup the middle ware to parse data from req.body
app.use(express.urlencoded({ extended: true }));

// Setup ejs engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create "new" router
const newRouter = Router();

// Register the "new" router
app.use('/new', newRouter);

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

// Render Form
newRouter.get(
	'/',
	asyncHandler((req, res) => {
		res.render('form');
	})
);

// Submit Form
newRouter.post(
	'/',
	asyncHandler((req, res) => {
		messages.push({ user: req.body.name, text: req.body.text });
		res.status(200).redirect('/');
	})
);

// Error handler
app.use((err, req, res, next) => {
	res.status(404).send(err.message);
});
