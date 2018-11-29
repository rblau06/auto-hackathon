const data = require('../assets/questions.json') //get questions from json array  
const location = 'Boston' // pull from api
const game = data.Game.Boston.questions

console.log(game[2].question)

const QuizController = {
    getQuestion: (req,res) => {
        let questionId = req.params.id
        questionId --
        let question = game[questionId].question
        let options = game[questionId].options

        res.render('index', {
            question: question,
            options: options
        })
    }
}

module.exports = QuizController