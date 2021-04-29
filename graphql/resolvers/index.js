const itemResolvers = require("./items");

module.exports = {
	Query: {
		...itemResolvers.Query,
	},
	Mutation: {
		...itemResolvers.Mutation,
	},
};
