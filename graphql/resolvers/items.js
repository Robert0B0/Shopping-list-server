const Item = require("../../models/Item");

module.exports = {
	Query: {
		async getAllItems() {
			try {
				const items = await Item.find().sort({ strike: false, createdAt: -1 });
				return items;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getItem(_, { itemId }) {
			try {
				const item = await Item.findById(itemId);
				if (item) {
					return item;
				} else {
					throw new Error("Item not found");
				}
			} catch (err) {
				throw new Error("Item not found");
			}
		},
	},
	Mutation: {
		async createItem(_, { name }) {
			if (name.trim() === "") {
				throw new Error("Item name must not be empty");
			}

			const newItem = new Item({
				name,
				strike: false,
				createdAt: new Date().toISOString(),
			});

			const item = await newItem.save();
			return item;
		},
		async renameItem(_, { itemId, newName }) {
			try {
				const item = await Item.findById(itemId);
				if (item) {
					if (newName.trim() === "") {
						throw new Error("Item name must not be empty");
					}
					item.name = newName;
					await item.save();
					return item;
				} else {
					throw new Error("Item not found.");
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async deleteAllItems() {
			try {
				const items = await Item.deleteMany();
				return "Items List cleared";
			} catch (err) {
				throw new Error(err);
			}
		},
		async deleteItem(_, { itemId }) {
			try {
				const item = await Item.findById(itemId);
				if (item) {
					await item.remove();
					return "Item deleted";
				} else {
					throw new Error("Item not found.");
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async strikeItem(_, { itemId }) {
			const item = await Item.findById(itemId);
			if (item) {
				if (item.strike === false) {
					item.strike = true;
				} else {
					item.strike = false;
				}
			} else {
				throw new Error("Item not found");
			}

			await item.save();
			return item;
		},
	},
};
