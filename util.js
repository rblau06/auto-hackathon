const time = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('test')
        }, 10000);
    })
}

// time()
module.exports = time