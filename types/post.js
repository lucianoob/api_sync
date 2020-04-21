const { GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } = require("graphql");

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post of the user from API.',
    fields: {
        userId: { type: new GraphQLNonNull(GraphQLID), description: 'Id of the user.' },
        id: { type: new GraphQLNonNull(GraphQLID), description: 'Id of the post.' },
        title: { type: GraphQLString, description: 'Title of the post.' },
        body: { type: GraphQLString, description: 'Body of the post.' }
    }
});

module.exports = exports = PostType;