const express = require('express');

const router = express.Router();

// get data
router.get(`/`,  function (req, res) {
	res.status(200).json("hello world");
	console.log("hellolllll")
});

module.exports = router;
