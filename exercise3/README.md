<pre>
    This is grading system API created with GraphQL

    Start with:
        npm install
        node gradingSystem.js

    Example requests at http://localhost:8000/graphql:

get Students: 

query getStudent{
    students{             # or student(id: INT)
        studentId,        # optional
        name{             # optional
            firstName,    # |
            familyName    # | atleast one
        },
        email,            # optional
        birthday,         # optional
        groupId           # optional
    }
}

Courses: 
    query getCourse{
        courses{              # or course(id: INT)
            courseId,         # optional  
            name,             # optional
            description,      # optional
            teacherName,      # optional 
        }
    }

Grades:
    query getGrades{
        grades{               # or grade(id: STUDENTID)
            student{          # same as student
                name{
                    familyName
                }
            }
            grades{
                course{       # same as course
                    name
                },
                grades        # also optional, but main point to display grade
            }
        }
    }
______________________________________________________________________________

Mutations:
mutation createStudent{
    createStudent(
        email: "NewStudent@email.com",  # required
        name: {
            firstName: "New",           # required
            familyName: "Student",      # required
        }   
        birthday: "01.01.2000"          # required
    )
    {
        success                         # required
    }
}

mutation modifyStudent{
        modifyStudent(
            studentId: 1,                               # required
            firstName: "anotherName",                   # optional
            familyName: "anotherFamilyName",            # optional
            groupId: "1",                               # optional
            birthday: "01.01.2020"                      # optional
        )
        {
            success                                     # required
        }
    }

mutation createCourse{
    createCourse(
        name: "Mobile Physics",                         # required
        teacherName: "Jaakko Kaski",                    # required
        description:"Analysing mobile device sensors"   # required
    )
    {
        success                                         # required
    }
}

mutation modifyCourse{
    modifyCourse(                                       
        courseId: 1,                                    # required, Id of course to be modified  
        name: "Mobile Physics",                         # optional    
        teacherName: "Jaakko Kaski",                    # optional
        description:"Analysing mobile device sensors"   # optional
)
{
    success                                             # required
}

mutation{
    createGrade(
        studentName:"User",             # required, the exact name of student
        courseName: "Web Interfaces",   # required, the exact course name
        grade: 1                        # required, requested grade
    )
    {
        success                         # required
    }
}

mutation{
    modifyGrade(
        studentName:"User",             # required, the exact name of student
        courseName: "Web Interfaces",   # required, the exact course name
        grade: 1                        # required, new value of the grade
    )
    {
        success                         # required
    }   
}




</pre>