const { model, Schema } = require('mongoose');

const orderItemSchema = Schema({
    name:{
        type: String,
        minlength: [5, 'Panjang nama makanan minimal 5'],
        required: [true, 'name must be filled']
    },
    price:{
        type: Number,
        required: [true, 'Harga harus diisi']
    },
    qty: {
        type: Number,
        required: [true, 'Kuantitas harus diisi'],
        minlength: [1, 'Kuantitas minimal 1']
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
})

module.exports = model('OrderItem', orderItemSchema);