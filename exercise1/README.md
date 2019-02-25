<pre>
This is exercise 1, Web interfaces

run: npm start / node index.js

when making request, body should be in raw json format

Example routes and bodies:
get -   http://localhost:3000/students
        http://localhost:3000/students/{id}
        http://localhost:3000/course
        http://localhost:3000/course/{id}
        http://localhost:3000/grades
        http://localhost:3000/students/{id}/grades

post -  http://localhost:3000/students
        body -  {
                    "name":"Example name",
                    "adress":"Example adress",
                    "class":[
                        {
                            "name": "Hybrid Application Developement"
                        }
                    ]
                }

        http://localhost:3000/course
        body -  {
                    "name":"Post Example",
                    "description":"Post Example"
                }

        http://localhost:3000/grades
        body -  {
                    "name":"Hybrid Application Developement",
                    "grade": 1
                }

put -   http://localhost:3000/students/{id}
        body -  {
                    "name":"Put student name example",
                    "adress":"Example adress"
                }

        http://localhost:3000/course/{id}
        body -  {
                    "name":"Mobile Physics",
                    "description":"Learning data processing of sensors inside mobile devices"
                }

        http://localhost:3000/students/{id}/grades
        body -  {
                    "name":"Hybrid Application Developement",
                    "grade":5
                }

delete  http://localhost:3000/students/{id}
        http://localhost:3000/course/{id}
        http://localhost:3000/students/{id}/grades
        course name has to match with course name in student data
        body -  {
                    "name": "Hybrid Application Developement"
                }

</pre>