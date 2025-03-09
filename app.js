const express = require('express');
require('dotenv').config();

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
