const express = require('express')
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
const port = 3000
const students = require('./components/students');
const course = require('./components/course');
const grades = require('./components/grades');

var serverPort = process.env.PORT || 8080;
//http.createServer(app).listen(serverPort, function() { .. });

var options_object = {
    controllers: path.join(__dirname, './components'),
    loglevel: 'info',
    strict: true,
    router: true,
    validator: true,
    docs: {
        apiDocs: null,
        apiDocsPrefix: null,
        swaggerUi: null,
        swaggerUiPrefix: null
    }
}

//oasTools.configure(options_object);

app.use(bodyParser.json());

app.use('/students',students);
app.use('/course',course);
app.use('/grades',grades);

app.get('/', (req, res) => res.send('This is exercise1 in class Web Interfaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
