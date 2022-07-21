const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
    content: String,
    important: Boolean
})

//mapea los datos que llegan desde ls BD para que no aparezcan _id y _v y nos deje el campo ID como lo necesitamos.
//Modifica el comportamiento del toJSON que hace por defecto el noteSchema al traer los datos
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Note = model('Note', noteSchema)

module.exports = Note