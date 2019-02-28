let express = require('express');
let bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

let varStudId = 3;
let varCoursId = 3;

const schema = gql`
    type Mutation {    
        createStudent(
            email: String!,
            name: iName!,
            birthday: String!, 
        ): NewResponse!,

        modifyStudent(
            studentId: Int!,    
            email: String,
            firstName: String,
            familyName: String,
            birthday: String,   
        ): NewResponse!,

        createCourse(
            name: String!,
            description: String!,
            teacherName: String!,
        ): NewResponse!,

        modifyCourse(
            courseId: Int!,
            name: String,
            description: String,
            teacherName: String,
        ): NewResponse!,

        createGrade(
            studentName: String!, # search could be done with id, expect Family Name
            courseName: String!,
            grade: Int!,
        ): NewResponse!,

        modifyGrade(
            studentName: String!,
            courseName: String!,
            grade: Int!,
        ): NewResponse!,
        
    }

    type NewResponse {
        success: Boolean!    
    }

    input iName {
        firstName: String!,
        familyName: String!
    }
    input iGrades{
        courseName: String,
        grade: Int,
    }

    type Query {
        student(id:ID!): Student!,
        students: [Student!]!,
        course(id:ID!): Course!,
        courses: [Course!]!,
        grade(id:ID!): GradesStruct!,
        grades: [GradesStruct!]!,
    }

    type Student {
        studentId: ID!,
        email: String!,
        name: Name!
        groupId: String!
        birthday: String!
    }

    type Name {
        familyName: String!,
        firstName: String!,
    }

    type GradesStruct{
        student: Student!,
        grades: [Grades],
    }

    type Grades {
        course: Course,
        grade: Int,
    }

    type Course {
        courseId: ID!,
        name: String!,
        description: String!,
        teacherName: String!,
    }
`;

let courses = [
    {
        courseId: "1",
        name: "Hybrid Applications Developement",
        description: "Cordova, React, Reac-Native",
        teacherName: "Lasse Haverinen",
    },
    {
        courseId: "2",
        name: "Web Interfaces",
        description: "Api, OAS-server, GraphQL",
        teacherName: "Lasse Haverinen",
    }
]

let students = [
    {
        studentId: "1",
        email: "test.user@email.com",
        firstName: "Test",
        familyName: "User",
        groupId: "1",
        birthday: "2000-12-24",
        grades: [
            {
                course: courses[0], // example of assigning course
                grade: undefined    // and grade
            }
        ]
    },
    {
        studentId: "2",
        email: "john.doe@email.com",
        firstName: "John",
        familyName: "Doe",
        groupId: "2",
        birthday: "2001-12-24",
    }
];



const resolvers = {
    Query: {
        student: (parent, args, context, info) => {
            return students.find(e => e.studentId === args.id);
        },
        students: (parents, args, context, info) => {
            return students;
        },
        course: (parent, args, context, info) => {
            return courses.find(e => e.courseId === args.id);
        },
        courses: (parent, args, context, info) => {
            return courses;
        },
        grade: (parent, args, context, info) => {            
            const studentTemp = students.find(e => e.studentId === args.id);
            const obj = {
                student: studentTemp,
                grades: studentTemp.grades,
            };
            return obj;
            
        },
        grades: (parent, args, context, info) => {
            let arr = [];
            for (var i = 0; i<students.length;i++){
                let obj = {
                    student: students[i],
                    grades: students[i].grades,
                }
                arr.push(obj);
            }
            return arr;
        }
    },

    Student: {
        name: (parent, args, context, info) => {
            console.log(parent);
            return {
                firstName: parent.firstName,
                familyName: parent.familyName
            }
        }
    },

    Mutation: {
        createStudent: (parent, args, context, info) => { 
            console.log("tut");
            let newStudent = {
                studentId: (varStudId).toString(),
                email: args.email,
                firstName: args.name.firstName,
                familyName: args.name.familyName,
                groupId: "Not Determined",
                birthday: args.birthday,
            }
            varStudId++;
            students.push(newStudent);
            return { success: true}
        },  
        modifyStudent: (parent, args, context, info) => {
            for (var i = 0; i < students.length; i++){
                if (students[i].studentId == args.studentId){
                    if (args.email){
                        students[i].email = args.email;
                    }                    
                    if (args.birthday){
                        students[i].birthday = args.birthday;
                    }  
                    if(args.familyName){
                        students[i].familyName = args.familyName;
                    }
                    if(args.firstName){
                        students[i].firstName = args.firstName;
                    }
                    if(args.groupId){
                        students[i].groupId = args.groupId;
                    }
                    return { success: false}
                }
            };
            console.log("could not find student with id ",args.studentId);
            return { success: false}
        },
        modifyCourse: (parent, args, context, info) => {
            for (var i = 0; i < courses.length; i++){
                if (courses[i].courseId == args.courseId){
                    if (args.name){
                        courses[i].name = args.name;
                    }                    
                    if (args.description){
                        courses[i].description = args.description;
                    }  
                    if(args.teacherName){
                        courses[i].teacherName = args.teacherName;
                    }
                    return { success: true};
                }
            };
            console.log("Could not find course with id ",args.courseId);
            return { success: false}
        }, 
        createCourse: (parent, args, context, info) => { 
            let newCourse = {
                courseId: (varCoursId).toString(),
                name: args.name,
                description: args.description,
                teacherName: args.teacherName,
                grades: undefined,
            }
            varCoursId++;
            courses.push(newCourse);
            return { success: true }
        },
        createGrade:(parent, args, context, info) => { 
            let errorMessage = "student not found";
            for (var i = 0; i<students.length;i++){
                if (students[i].familyName === args.studentName){
                    let courseObj = courses.find(e => e.name === args.courseName);;
                    if (courseObj){
                        let obj = {
                            course: courseObj, 
                            grade: args.grade,
                        }
                        students[i].grades.push(obj);
                        return { success: true }
                    }
                    else{
                        errorMessage = "Course with name ",args.courseName," does not exist";
                        break;
                    }
                }
            }
            console.log(errorMessage);
            return { success: false }
        },
        modifyGrade: (parent, args, context, info) => { 
            let errorMessage = "student not found";
            for (var i = 0; i<students.length;i++){
                if (students[i].familyName === args.studentName){
                    for(var j = 0; j<students[i].grades.length;j++){
                        if (students[i].grades[j].course.name === args.courseName){
                            students[i].grades[j].grade = args.grade;
                            return { success: true }
                        }
                    }

                    errorMessage = "Course with name ",args.courseName," does not exist";
                    break;
                    
                }
            }
            console.log(errorMessage);
            return { success: false }
        },
        
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
    formatResponse: response => {
        console.log(response);
        return response;
    },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});