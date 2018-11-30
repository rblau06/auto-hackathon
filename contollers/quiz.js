const data = require('../assets/questions.json') //get questions from json array  
const location = 'Boston' // pull from api
const game = data.Game.Boston.questions

const QuizController = {
    launch: (req, res) => {
        const welcome = 'Welcome'
        const start = 'question/0'
        res.render('welcome', {
            welcome: welcome,
            start: start
        })
    },
    
    getQuestion: (req,res) => {
        const id = req.params.id
        const round = game[id]
        const question = round.question
        const options = round.options
        const correct = round.correct
        let optionList = ''
        
        options.forEach((option, i) => {
            if (correct == option) {
                optionList += `<li><a href="/answer/${id}/?userAnswer=correct">${option}</a>`
            } else {
                optionList += `<li><a href="/answer/${id}/?userAnswer=incorrect">${option}</a>`
            }
        })

        res.render('index', {
            question: question,
            optionList: optionList
        })
    },
    
    answer: (req, res) => {
        const id = req.params.id
        const correct = game[id].correct
        const userAnswer = req.query.userAnswer
        let next = parseInt(id) + 1

        if (userAnswer == 'correct') {
            res.render('answer', {
                grade: 'Correct!',
                next: next
            })
        } else {
            res.render('answer', {
                grade: 'Incorrect',
                next: next,
                correct: correct
            })
        }
    }
}

module.exports = QuizController