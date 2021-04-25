// module.exports = (app) => {
//     const profileService = require("../services/profile-service")
//     const usersService = require("../services/users-service")
//
//     const createProfile = (req, res) => {
//         let profile = req.body
//         let username = req.params.name
//         profileService.createProfile(username, profile)
//             .then(profile => res.send(profile))
//     }
//
//     const findProfileByUsername = (req, res) => {
//         let username = req.params.name
//         usersService.findProfileByUsername(username)
//             .then(profile => res.send(profile))
//     }
//
//     app.post('/api/users/:name/profile', createProfile)
//     app.get('/api/users/:name/profile', findProfileByUsername)
// }