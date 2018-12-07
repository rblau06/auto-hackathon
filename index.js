const express = require('express')
// const bodyParser = require('body-parser')

const quizController = require('./contollers/quiz.js')
const launchController = require('./controllers/welcome.js')
const apiAccess = require('./contollers/apiaccess.js')

const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
app.use(express.static('public'))
// app.use(bodyParser.json())

app.get('/:id?', launchController.launch)

app.get('/question/:id', quizController.getQuestion)

app.get('/answer/:id', quizController.answer)

app.get('/result', quizController.result)

app.listen(PORT, () => {
	console.log('App listening on port 4000')
})