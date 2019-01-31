const express = require('express');
let router = express.Router();

const studentsData = {
	students: [
	{
		id: 1,
		name:"Student 1",
		adress:"Oulu, Ylioppilaantie 4, 1",
		class:"Web Interfaces"
	},
	{
		id: 2,
		name:"Student 2",
		adress:"Oulu, Ylioppilaantie 4, 2",
		class:"Hybrid Application Developement"
	}]
}

router.get('/',(req,res) => { res.json(studentsData.students) });
router.get('/:studentId',(req,res) => { 
	const resultStudent = studentsData.students.find(d => {
		if (d.id == req.params.studentId){
			return true;
		}
		else {
			return false;
		}
	});

	if (resultStudent === undefined)
	{
		res.sendStatus(404)
	}
	else
	{
		res.json(resultStudent);
	}
})

router.post('/', (req,res) => {
	studentsData.students.push({
		id: studentsData.students.length + 1,
		name: req.body.name,
		adress: req.body.adress,
		class: req.body.class,
	});
	res.send('students post works');
})

router.put('/', (req,res) => {
		console.log(req.body);
		students.push(req.body);
	res.send('students modified');
})

router.delete('/', (req,res) => {
	studentsData.students.pop(req.body);
	res.send('student deleted');
})

module.exports = router;