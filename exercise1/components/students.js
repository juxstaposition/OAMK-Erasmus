const express = require('express');
const data = require('../dataStore');
let router = express.Router();


router.get('/',(req,res) => { 
	res.json(data.getAll("student"));
	console.log("get students works"); 
});

router.get('/:studentId',(req,res) => { 
	const studFound = data.findById(req.params.studentId,"student");
	
	if (studFound === undefined)
	{
		res.sendStatus(404);
		console.log("could not get student with id: ",req.params.studentId);
	}
	else
	{
		res.json(data.getById(studFound,"student"));
		console.log("student response send, id of student: ",req.params.studentId);
	}

});

router.post('/', (req,res) => {
	data.postById(req.body,"student");
	res.send('students post works');
})

router.put('/:studentId', (req,res) => {
	
	const studFound = data.findById(req.params.studentId,"student");
	
	if (studFound === undefined)
	{
		res.sendStatus(404);
		console.log("In the 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else
	{
		data.putById(studFound, req.body,"student");
		res.send("student modified");
		console.log("student modified, id: ",req.params.studentId);
	}
});

router.delete('/:studentId', (req,res) => {
	const studFound = data.findById(req.params.studentId,"student");
	if( studFound === undefined){
		res.sendStatus(404);
		console.log("In the 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else{
		data.deleteById(studFound,"student");
		res.send("Student deleted");
		console.log("deleted student with id: ",req.params.studentId);
	}
});

router.get('/:studentId/grades', (req,res) => {
	
	const studentFound = data.findById(req.params.studentId,"student");
	if (studentFound === undefined){
		res.sendStatus(404);
		console.log("In the grades 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else {
		const studenGrades = data.getStudentGrades(studentFound);
		res.json(studenGrades);
		console.log("get grades of a student works");
	}
});

router.put('/:studentId/grades', (req,res) => {
	const studentFound = data.findById(req.params.studentId,"student");
	if (studentFound === undefined){
		res.sendStatus(404);
		console.log("In the grades 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else {
		data.putGrade(studentFound,req.body);
		res.send("grade modified");
		console.log("put grade works");
	}
});

router.post('/:studentId/grades', (req,res) => {
	const studentFound = data.findById(req.params.studentId,"student");
	if (studentFound === undefined){
		res.sendStatus(404);
		console.log("In the grades 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else {
		data.postGrade(studentFound,req.body);
		res.send("grade added");
		console.log("post grade works");
	}
});

router.delete('/:studentId/grades', (req,res) => {
	const studentFound = data.findById(req.params.studentId,"student");
	if (studentFound === undefined){
		res.sendStatus(404);
		console.log("In the grades 'database' is no occurence of student with Id: ",req.params.studentId);
	}
	else {
		data.deleteGrade(studentFound,req.body);
		res.send("grade deleted");
		console.log("delete grade works");
	}
});

module.exports = router;