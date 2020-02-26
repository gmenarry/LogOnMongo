let UserSchema = require('../models/signup')

function email(email) {
    return new Promise((resolve, reject) => {
        UserSchema.find({ email}, (err, docs) => {
            if(err) reject(err);

            resolve(docs)
        })
    })
}
function username(username) {
    return new Promise((resolve, reject) => {
        UserSchema.find({ name: username}, (err, docs) => {
            if(err) reject(err);

            resolve(docs)
        })
    })
}
module.exports = {username, email}