// importing packages
const express = require('express');

// mongodb driver
// const mongodb = require('mongodb');

const router = express.Router();

// get data
router.get(`/`,  function (req, res) {
	res.status(200).json({msg: `It's a GET request.`});
});

router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.`});
});

// database connection

// async function loadData() {
// 	const client = await mongodb.MongoClient.connect(
// 		'',{
// 			useNewUrlParser: true
// 		}
// 	);
// 	return client.db('autodex').collection('data');
// }

// router.put(`/`, function (req, res) {
// 	res.status(200).json({msg: `It's a PUT request.`});
// });
// router.delete(`/`, function (req, res) {
// 	res.status(200).json({msg: `It's a DELETE request.`});
// });

// exporting the router
module.exports = router;