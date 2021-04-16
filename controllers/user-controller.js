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
                            res.send(user)
                        })
                }
            })
    }

    const profile = (req, res) => {
        const currUser = req.session['profile']
        res.send(currUser)
    }

    const login = (req, res) => {
        let credentials = req.body

        // UsersService
    }

    app.post('/api/users/register', register)
    app.post('/api/users/profile', profile)
    app.post('/api/users/login', login)
    // app.post('/api/users/logout', logout)
}