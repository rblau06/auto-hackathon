const data = require('../assets/questions.json') //get questions from json array  
// const game = data.Game.location //why doesn't this work?
const location = 'Boston' // pull from api
const game = data.Game.Boston

const QuizController = {
    getQuestion: (req,res) => {
        // need to loop through for each new question
        let questionId = req.params.id
        let question = Game.Boston.questions[questionId + 1]
        let answers = game.q1.options
        

        res.render('index', {
            question: question,
            answers: answers
        })
    }
}

module.exports = QuizController