const express = require('express');
const data = require('../dataStore');
let router = express.Router();

router.get('/',(req,res) => 
	res.json(data.getAll("course"))
);

router.get('/:courseId',(req,res) => { 
	const resultCourse = data.findById(req.params.courseId,"course");

	if (resultCourse === undefined)
	{
		res.sendStatus(404);
		console.log("could not find course with id: ",req.params.courseId);
	}
	else
	{
		res.json(data.getById(resultCourse,"course"));
		console.log("course get by id works");
	}
})

router.post('/', (req,res) => {
	data.postById(req.body,"course");
	res.send('course post works');
})

router.put('/:courseId',(req,res) => { 
	const resultCourse = data.findById(req.params.courseId,"course");

	if (resultCourse === undefined){
		res.sendStatus(404);
		console.log("could not find course with id: ",req.params.courseId);
	}
	else{
		data.putById(resultCourse,req.body,"course");
		res.send('course updated');
		console.log("course updated, id: ", req.params.courseId);
	}
});

router.delete('/:courseId', (req,res) => {
	const message = data.deleteById(req.params.courseId,"course",req,res);
	if (message === "could not find course"){
		res.sendStatus(404);
	}
	res.send(message);

})

module.exports = router;