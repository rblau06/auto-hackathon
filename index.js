const express = require('express')
// const bodyParser = require('body-parser')
const quizController = require('./contollers/quiz.js')
const apiAccess = require('./controllers/apiaccess.js')
const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
app.use(express.static('public'))
// app.use(bodyParser.json())

app.get('/', quizController.launch)
app.get('/', apiAccess.launch)

app.get('/question/:id', quizController.getQuestion)

app.get('/answer/:id', quizController.answer)

app.get('/result', quizController.result)

app.listen(PORT, () => {
	console.log('App listening on port 4000')
})