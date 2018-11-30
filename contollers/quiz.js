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
        let questionId = req.params.id
        let question = game[questionId].question
        let options = game[questionId].options
        let correct = game[questionId].correct
        let optionList = ''
        // console.log(correct)
        
        options.forEach(option => {
            optionList += `<li><a href="answer/${questionId}">${option}</a>`
        })
        console.log(optionList)

        res.render('index', {
            question: question,
            options: options,
            optionList: optionList,
            id: questionId
        })
    },
    
    answer: (req, res) => {
        options.forEach((option, i) => {
            if (correct == option) {
                //go to answers/correct
            } else {
                //go to answers/incorrect
            }
        })
    }
}

module.exports = QuizController