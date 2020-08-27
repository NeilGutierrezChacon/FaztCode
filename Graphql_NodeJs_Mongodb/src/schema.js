import { makeExecutableSchema } from "graphql-tool";
import { resolvers } from './resolvers';

const typeDefs = `

    type Query {
        hello: String
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});