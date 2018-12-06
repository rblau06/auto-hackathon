const data = require('../assets/questions.json')
const location = 'Boston'

const LaunchController = {
    launch: (req, res) => {
        const welcome = 'Welcome'
        const start = 'question/0'
        res.render('welcome', {
            welcome: welcome,
            start: start
        })
    }
}