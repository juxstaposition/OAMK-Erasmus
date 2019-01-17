const express = require('express');
let router = express.Router();

const courseData = {
	course: [
    {
		id: 1,
		name:"Web Interfaces",
		description:"Learning api, REST, express, cordova"
    },
    {
		id: 2,
		name:"Mobile Physics",
		description:"Learning data processing of sensors inside mobile devices"
    },
    {
		id: 3,
		name:"Hybrid app developements",
		description:"App developements"
    }
]}

router.get('/',(req,res) => res.json(courseData.course));
router.get('/:courseId',(req,res) => { 
	const resultCourse = courseData.course.find(d => {
		if (d.id == req.params.courseId){
			return true;
		}
		else {
			return false;
		}
	});

	if (resultCourse === undefined)
	{
		res.sendStatus(404)
	}
	else
	{
		res.json(resultCourse);
	}
})

router.post('/', (req,res) => {
	courseData.course.push({
		id: courseData.course.length + 1,
		name: req.body.name,
		description: req.body.description,
	});
	res.send('course post works');
})

router.put('/:courseId',(req,res) => { 
	for (var i = 0; i < courseData.course.length; i++) {
		if (courseData.course[i].id === req.param.courseId) {
			courseData.course[i].name = req.body.name;
			courseData.course[i].description = req.body.description;
			break;
		}
	}
	res.send('course updated');
}) 

router.delete('/', (req,res) => {
	courseData.course.pop(req.body);
	res.send('course deleted');
})

module.exports = router;