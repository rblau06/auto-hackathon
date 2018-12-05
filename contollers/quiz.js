const data = require('../assets/questions.json') //get questions from json array  
const location = 'Boston' // pull from api
const game = data.Game.Boston.questions
let score = 0

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
		const round = game[id]
		const roundNumber = parseInt(id) + 1
		const correct = round.correct
		const userAnswer = req.query.userAnswer
		let next = `/question/${parseInt(id) + 1}`
		console.log(roundNumber, game.length)

		if (roundNumber == game.length) {
			const result = '/result'			
			res.render('answer', {
				grade: 'Correct!',
				correct: correct,
				next: result
			})

		} else if (userAnswer == 'correct') {
			score += 1
			res.render('answer', {
				grade: 'Correct!',
				next: next, 
				correct: correct
			})
		} else if (userAnswer == 'incorrect') {
			res.render('answer', {
				grade: 'Incorrect',
				next: next,
				correct: correct
			})
		}
	},

	result: (req, res) => {
		const restart = 'question/0'
		res.render('results', {
			result: score,
			numberOfQuestions: game.length,
			restart: restart
		})
	}
}

module.exports = QuizController