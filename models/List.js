const { model, Schema } = require("mongoose");

const listSchema = new Schema({
	name: String,
	createdAt: String,
});

module.exports = model("List", listSchema);
