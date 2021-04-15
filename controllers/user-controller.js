module.exports = (app) => {

    const UsersService = require("../services/users-service")

    const register = (req, res) => {
        let credentials = req.body

        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        let role = req.body.role;
        let birthday = req.body.birthday;

        UsersService.findUserByUsername(username)
            .then(actualUser => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    UsersService.createUser(credentials)
                        .then(user => {
                            req.session['profile'] = user
                            console.log(user)
                            res.send(user)
                        })
                }
            })
    }

    const profile = (req, res) => {
        const currUser = req.session['profile']
        res.send(currUser)
    }

    app.post('/api/users/register', register)
    app.get('/api/users/profile', profile)
    // app.post('/api/login', login)
    // app.post('/api/logout', logout)
}