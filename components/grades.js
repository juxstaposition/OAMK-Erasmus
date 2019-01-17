const express = require('express');
let router = express.Router();

const gradesData = {
    grades: [
        {
            student: 1,
            course: [
                { id:1, grade: 5},
                { id:2, grade: 5},
                { id:3, grade: 2},
            ]
        },
        {
            student: 2,
            course: [
                { id:1, grade: 4},
                { id:2, grade: 5},
                { id:3, grade: 2},
            ]
        }
    ]
}

router.get('/',(req,res) => { res.json(gradesData.grades) });
router.get('/:gradeId',(req,res) => { 
	const resultGrade = gradesData.grades.find(d => {
		if (d.student == req.params.gradeId){
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

router.put('/',function(req,res){
	res.send("put grade works")
});

router.post('/', (req,res) => {
	gradesData.grades.push({
		students: gradesData.grades.length + 1,
		course: req.body.course,
	});
	res.send('grades post works');
})

router.delete('/', (req,res) => {
	gradesData.grades.pop(req.body);
	res.send('grade deleted');
})


module.exports = router;