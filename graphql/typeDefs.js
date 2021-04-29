const { gql } = require("apollo-server");

module.exports = gql`
	type Item {
		id: ID!
		name: String!
		strike: Boolean!
		createdAt: String!
	}
	type Query {
		getAllItems: [Item]
		getItem(itemId: ID!): Item
	}
	type Mutation {
		createItem(name: String!): Item!
		renameItem(itemId: ID!, newName: String!): Item!
		deleteAllItems: String!
		deleteItem(itemId: ID!): String!
		strikeItem(itemId: ID!): Item!
	}
`;
