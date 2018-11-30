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
        const round = game[req.params.id]
        const question = round.question
        const options = round.options
        const correct = round.correct
        let optionList = ''
        
        options.forEach((option, i) => {
            if (correct == option) {
                optionList += `<li><a href="/answer/correct">${option}</a>`
            } else {
                optionList += `<li><a href="/answer/incorrect">${option}</a>`
            }
        })

        res.render('index', {
            question: question,
            optionList: optionList
        })
    },
    
    answer: (req, res) => {
        const grade = req.params.grade
        console.log(grade);
        if (grade == 'correct') {
            res.render('answer', {
                grade: grade
            })
        } else {
            res.render('answer', {
                grade: "incorrect"
            })
        }
    }
}

module.exports = QuizController