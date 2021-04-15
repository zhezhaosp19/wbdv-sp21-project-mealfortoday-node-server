module.exports = (app) => {

    const hello = (req, res) => {
        res.send('Hello World')
    }

    app.get('/', hello)
}