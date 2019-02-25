<pre>
This is exercise 1, Web interfaces
run: npm start / node index.js

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
        http://localhost:3000/grades


</pre>