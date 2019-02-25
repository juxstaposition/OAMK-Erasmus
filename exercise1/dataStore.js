let studentId = 3;
let courseId = 3;

const studentsData = {
	students: [
	{
		id: 0,
		name:"Student 0",
		adress:"Oulu, Ylioppilaantie 4, 1",
		class:[ 
			{ 
				name:"Web Interfaces",
				grade: undefined,
			}
		]
	},
	{
		id: 1,
		name:"Student 1",
		adress:"Oulu, Ylioppilaantie 4, 2",
		class:[
			{
				name: "Hybrid Application Developement",
				grade: undefined,
			}
		]
	},	
	{
		id: 2,
		name:"Student 2",
		adress:"Oulu, Ylioppilaantie 4, 3",
		class:[
			{
				name:"Hybrid Application Developement",
				grade:undefined,
			},
			{
				name:"Web Interfaces",
				grade: undefined
			} 
		]
	}]
}

const courseData = {
	course: [
    {
		id: 0,
		name:"Web Interfaces",
		description:"Learning api, REST, express, cordova"
    },
    {
		id: 1,
		name:"Mobile Physics",
		description:"Learning data processing of sensors inside mobile devices"
    },
    {
		id: 2,
		name:"Hybrid Application Developement",
		description:"App developement"
    }
]}

function getAll(type) {
	if (type === "student"){
		return studentsData.students;
	}
	else if(type === "course"){
		return courseData.course;
	}
}

function getById(id, type){
	if (type === "student"){
		return studentsData.students[id];
	}
	else if (type === "course"){
		return courseData.course[id];
	}
}

function postById(body, type){
	if (type === "student"){	
		studentsData.students.push({
			id: studentId++,
			name: body.name,
			adress: body.adress,
			class: body.class,
		});
	}
	else if (type === "course"){	
		courseData.course.push({
			id: courseId++,
			name: body.name,
			description: body.description,
		});
	}

}

function putById(id,body,type){
	if (type === "student"){	
		if (body.name){
			studentsData.students[id].name = body.name;
		}	
		if (body.adress){
			studentsData.students[id].adress = body.adress;
		}	
		if (body.class){
			studentsData.students[id].class = body.class;
		}	
	}
	else if (type === "course"){
		if (body.name){
			courseData.course[id].name = body.name;
		}	
		if (body.description){
			courseData.course[id].description = body.description;
		}	
	}

}

function deleteById(id,type){
	if (type === "student"){
		studentsData.students.splice(id,1);
	}
	else if (type === "course"){
		const resultCourse = findById(id,"course");
		
		if( resultCourse === undefined){
			return "could not find course";
		}
		else{
			const delCourseName = courseData.course[resultCourse].name;
			for( var i = 0; i<studentsData.students.length; i++){
				for (var j = 0; j<studentsData.students[i].class.length;j++){
					if (delCourseName === studentsData.students[i].class[j].name){
						studentsData.students[i].class.splice(j,1);
					}
				}
			}
			courseData.course.splice(id,1);
			return "course deleted";
		}
	}
	
	return "something went wrong";	
}

function findById (id,type){
	id = parseInt(id);

	if (type === "student"){
		for(var i =0; i<studentsData.students.length; i++){
			if (id === studentsData.students[i].id){
				return i;
			}
		}
	}
	else if (type === "course"){
		for(var i =0; i<courseData.course.length; i++){
			if (id === courseData.course[i].id){
				return i;
			}
		}
	}  
	return undefined;
}


function getAllGrades(){
	const grades = studentsData.students.map(student => {
		
		const getGrades = student.class.map(classData => {
			let newObj = {
				courseName: classData.name,
				grade: classData.grade
			} 
			return newObj;
		});
		console.log("grades",getGrades);
		
		let obj = {
			studentName: student.name,
			grades: getGrades
		};
		
		return obj;
	});
	return grades;
}

function getStudentGrades(id){
	return studentsData.students[id].class;
}

function putGrade(idStudent,body){
	const student = studentsData.students[idStudent];
	
	for (var i = 0; i < student.class.length;i++){
		if (student.class[i].name === body.name){
			student.class[i].grade = body.grade;
		}
	}
}

function postGrade(idStudent,body){
	const student = studentsData.students[idStudent];
	
	for (var i = 0; i < student.class.length;i++){
		if (student.class[i].name === body.name){
			student.class[i]= {
				name: body.name,
				grade: body.grade,
			}
		}
	}

	console.log("post grade ends");
}

function deleteGrade(idStudent,body){
	const student = studentsData.students[idStudent];
	for (var i = 0; i < student.class.length;i++){
		if (student.class[i].name === body.name){
			delete student.class[i].grade;
		}
	}
}

module.exports = {
	findById,
	getAll,
	getById,
	postById,
	putById,
	deleteById,
	getAllGrades,
	getStudentGrades,
	putGrade,
	postGrade,
	deleteGrade,
}