const mongoose = require('mongoose');
const { model, Schema} = mongoose;

let categorySchema = Schema({
    name: {
    type: String,
    minlength:[3, 'Panjang karakter category minimal 3 karakter'],
    maxlength:[20, 'Panjang karakter category maksimal 20 karakter'],
    required: [true, 'Nama kategori harus diisi']
    }
})

module.exports = model('Category', categorySchema)