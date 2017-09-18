const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./Schemas/schema')

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening 4000 port')
});