const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const students = require('./components/students');
const course = require('./components/course');
const grades = require('./components/grades');

app.use(bodyParser.json());

app.use('/students',students);
app.use('/course',course);
app.use('/grades',grades);

app.get('/', (req, res) => res.send('This is exercise1 in class Web Interfaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))