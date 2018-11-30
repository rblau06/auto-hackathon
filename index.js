const express = require('express')
const bodyParser = require('body-parser')
const quizController = require('./contollers/quiz.js')
const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', quizController.launch)

app.get('/question/:id', quizController.getQuestion)

app.get('/answer/:grade', quizController.answer)

app.listen(PORT, () => {
    console.log('App listening on port 4000')
})