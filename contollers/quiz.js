const data = require('../assets/questions.json') //get questions from json array  
const location = 'Boston' // pull from api
const game = data.Game.Boston

// console.log(game)

const QuizController = {
    getQuestion: (req,res) => {
        // need to loop through for each new question
        let questionId = req.params.id
        let question = game.questions[id + 1]
        let options = game.question.options       

        res.render('index', {
            question: question,
            options: options
        })
    }
}

module.exports = QuizController