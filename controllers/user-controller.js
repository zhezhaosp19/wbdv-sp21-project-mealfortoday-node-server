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
        let username = req.body.username;
        let password = req.body.password;

        UsersService.findUserByUsername(username)
            .then(actualUser => {
                //"1" => user exists, but wrong password
                if(actualUser.length > 0) {
                    // res.send("1")
                    UsersService.findUserByCredentials(credentials)
                        .then(user => {
                            if(user) {
                                req.session['profile'] = user
                                res.send(user)
                            } else {
                                res.send("1")
                            }
                        })
                } else {
                    //"0" => user not exists
                    res.send("0")
                }
            })
        // UsersService.findUserByCredentials(credentials)
        //     .then(actualUser => {
        //         if(actualUser) {
        //             req.session['profile'] = actualUser
        //             res.send(actualUser)
        //         } else {
        //             res.send("0")
        //         }
        //     })

        // UsersService
    }

    app.post('/api/users/register', register)
    app.post('/api/users/profile', profile)
    app.post('/api/users/login', login)
    // app.post('/api/users/logout', logout)
}