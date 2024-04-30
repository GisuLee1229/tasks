const { Schema, model } = require('mongoose')
const { type } = require('os')

const dataTable = Schema({
    username: { type: String, require: true },
    password: { type: String, require: true }
})

module.exports = model('users_collection', dataTable)