const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const { ApolloServer, gql } = require('apollo-server');
const typeDefs =require('./graphql/models/types')
const resolvers=require('./graphql/resolvers/rootresolver')

const URL = ' mongodb://127.0.0.1:27017/graphql'

const PORT = 4000; 

mongoose.connect(URL, {useNewUrlParser : true},(err) => {
    if (err) {
      console.log(err)
      console.log('Error while Connecting!')
    } else {
      console.log('Connected to Mongo DB')
    }
  })

const server=new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url,subscriptionsUrl}) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 subscriptions ready at ${subscriptionsUrl}`);

});