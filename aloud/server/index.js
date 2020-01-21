const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const PORT = process.env.PORT || 3000;
//dev visualizer
const { middleware, visualizer } = require('express-routes-visualizer');

app.use(express.static(`${__dirname}/../client/dist`));

app.use(
  '/routes',
  middleware({ httpMethods: true }),
  visualizer({ theme: 'burn' })
)

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`

type Query {
  hello: String
  recordings: [Recording!]!
  recording(id: ID!): Recording
  description: String!
}

type Mutation {
  createDraft(
    title: String!,
    content: String
    ): Recording

  updateRecording(
    id: ID!
    title: String!
    content: String!
    published: Boolean!
  ) : Recording

  deleteRecording(
    id: ID!
    ): Recording

  publishRecording(
    id: ID!
    ): Recording
}

type Recording {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
}
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Express app is listening on port ${PORT}!🚀🛸`))
console.log('Running a GraphQL API server at http://localhost:3000/graphql');