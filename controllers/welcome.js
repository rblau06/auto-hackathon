const data = require('../assets/questions.json')
const location = 'Boston'
const start = 'question/0'

const LaunchController = {
    launch: (req, res) => {
        const id = req.params.id
        let skip = `/${parseInt(id) + 1 || 1}`
        
        if (id == 1) {
            //first screem
            res.render('welcome', {
                message: 'You will be asked a question specific to your location',
                image: `/images/onboarding-location.png`,
                skip: skip
            })
        } else if (id == 2) {
            //second screen
            res.render('welcome', {
                message: 'You will have 15 seconds to read the question and select your answer',
                image: `/images/onboarding-clock.png`,
                skip: skip
            }) 
        } else if (id == 3) {
            //third screen
            res.render('welcome', {
                message: 'If you get the correct answer, you get a point!',
                image: `/images/onboarding-point.png`,
                start: start
            })
        } else {
            res.render('welcome', {
                //welcome screen
                message: `Welcome to ${location}`,
                logo: '/images/ohThePlacesYoullKnow.png',
                launch: skip
            }) 
        }
    }
}

module.exports = LaunchController