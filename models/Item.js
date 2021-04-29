const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
	name: String,
	strike: Boolean,
	createdAt: String,
});

module.exports = model("Item", ItemSchema);
