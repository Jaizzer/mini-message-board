const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const newRouter = Router();

newRouter.get(
	'/',
	asyncHandler((req, res) => {
		// Render Form
		res.render('form');
	})
);

module.exports = newRouter;
