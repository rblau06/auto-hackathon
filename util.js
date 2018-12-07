const time = (res) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('test')
            res.redirect('ad')
        }, 1000);
    })
}

module.exports = time