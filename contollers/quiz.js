const data = require('../assets/questions.json') //get questions from json array  
const location = 'Boston' // pull from api
const game = data.Game[location].questions
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
		const question = game[id].question
		const correct = game[id].correct
		let options = game[id].options
		let placeholder = ''			
		
		options.forEach((option, i) => {
			if (correct == option) {
				placeholder += `<li><a href="/answer/${id}/?userAnswer=correct">${option}</a>`
			} else {
				placeholder += `<li><a href="/answer/${id}/?userAnswer=incorrect">${option}</a>`
			}
		})
		
		options = placeholder

		res.render('index', {
			question: question,
			options: options
		})
	},
	
	answer: (req, res) => {
		const id = req.params.id
		const round = parseInt(id) + 1
		const correct = game[id].correct
		const userAnswer = req.query.userAnswer
		let next = `/question/${parseInt(id) + 1}`

		if (round == game.length) {
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