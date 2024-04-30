const { Schema, model } = require('mongoose')
const { type } = require('os')

const dataTable = Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    id: { type: String, require: true },
})

module.exports = model('student_collection', dataTable)