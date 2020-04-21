const { GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } = require('graphql');

const GeoType = new GraphQLObjectType({
    name: 'Geo',
    description: 'Geolocation coordenates.',
    fields: {
        lat : { type: GraphQLString, description: 'Latitude of the geolocation.' },
        lng : { type: GraphQLString, description: 'Longitude of the geolocation.' }
    }
});

const AddressType = new GraphQLObjectType({
    name: 'Address',
    description: 'Address of the user.',
    fields: {
        street : { type: GraphQLString, description: 'Street of the address.' },
        suite : { type: GraphQLString, description: 'Suite of the address.' },
        city : { type: GraphQLString, description: 'City of the address.' },
        zipcode : { type: GraphQLString, description: 'Zipcode of the address.' },
        geo : { type: GeoType, description: 'Geolocation coordenates.' }
    }
});

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    description: 'Company of the user.',
    fields: {
        name : { type: GraphQLString, description: 'Name of the company.' },
        catchPhrase : { type: GraphQLString, description: 'catchPhrase of the company.' },
        bs : { type: GraphQLString, description: 'BS of the company.' }
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User from the API.',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID), description: 'Id of the user.' },
        name: { type: GraphQLString, description: 'Name of the user.' },
        username: { type: GraphQLString, description: 'Username of the user.' },
        email: { type: GraphQLString, description: 'Email of the user.' },
        address: { type: AddressType, description: 'Address of the user.' },
        phone: { type: GraphQLString, description: 'Phone of the user.' },
        website: { type: GraphQLString, description: 'Website of the user.' },
        company: { type: CompanyType, description: 'Company of the user.' }
    }
});

module.exports = exports = UserType;