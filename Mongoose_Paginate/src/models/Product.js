const {Schema,model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new Schema(
    {
        name: String,
        price: Number
    },
    {
        timestamps: true
    }
);

productSchema.plugin(mongoosePaginate);

module.exports = model("Product", productSchema);

