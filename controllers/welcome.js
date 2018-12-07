const data = require('../assets/questions.json')
const location = 'Boston'
const start = '/question/0'

const LaunchController = {
    launch: (req, res) => {
        const id = req.params.id
        let skip = `/start/${parseInt(id) + 1 || 1}`
        
        if (id == 1) {
            //first screem
            res.render('welcome', {
                message: '<h2 class="onboarding-h2">You will be asked a question specific to your location</h2>',
                image: `/images/onboarding-location.png`,
                skip: skip
            })
        } else if (id == 2) {
            //second screen
            res.render('welcome', {
                message: '<h2 class="onboarding-h2">You will have 15 seconds to read the question and select your answer</h2>',
                image: `/images/onboarding-clock.png`,
                skip: skip
            }) 
        } else if (id == 3) {
            //third screen
            res.render('welcome', {
                message: '<h2 class="onboarding-h2">If you get the correct answer, you get a point!</h2>',
                image: `/images/onboarding-point.png`,
                start: start
            })
        } else {
            res.render('welcome', {
                //welcome screen
                message: `<h1>Welcome to ${location}</h1>`,
                logo: '/images/ohThePlacesYoullKnow.png',
                launch: skip
            }) 
        }
    }
}

module.exports = LaunchController