const { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } = require("graphql");

const UsersModel = require('./models/users');
const PostsModel = require('./models/posts');

const UserType = require('./types/user');
const PostType = require('./types/post');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: 'Get users and posts data',
        fields: {
            users: {
                type: GraphQLList(UserType),
                description: 'Get an list of the users.',
                resolve: (root, args, context, info) => {
                    return UsersModel.find().exec();
                }
            },
            user: {
                type: UserType,
                description: 'Get the user data.',
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return UsersModel.findById(args.id).exec();
                }
            },
            posts: {
                type: GraphQLList(PostType),
                description: 'Get an list of the all posts.',
                resolve: (root, args, context, info) => {
                    return PostsModel.find().exec();
                }
            },
            user_posts: {
                type: GraphQLList(PostType),
                description: 'Get an list of the user posts.',
                args: {
                    userId: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return PostsModel.find({userId: args.userId}).exec();
                }
            },
            post: {
                type: PostType,
                description: 'Get the post data.',
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return PostsModel.findById(args.id).exec();
                }
            }
        }
    })
});

module.exports = exports = schema;