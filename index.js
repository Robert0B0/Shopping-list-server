const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");

const PORT = process.env.PORT || 5001;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});

mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to Database.");
		return server.listen({ port: PORT });
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`);
	})
	.catch((err) => console.error(err));
