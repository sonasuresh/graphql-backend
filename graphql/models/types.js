const { gql } = require('apollo-server');

module.exports = gql`
    type User{
        _id:ID,
        name:String,
        mobile:Int,
        email:String
    }
    input CreateUserInput{
        name:String,
        mobile:Int,
        email:String 
    }
    type UserCreatedMessage{
        message:String
    }
    type RootQuery{
        getUsers:[User]
        getUserByEmail(email:String!):User
    }
    type RootMutation{
        createUser(CreateUserInput:CreateUserInput):User
        test:String
    }
    type RootSubscription{
        userCreated:UserCreatedMessage
        testSubscribe:String!
    }
    schema{
        query:RootQuery
        mutation:RootMutation,
        subscription:RootSubscription
    }
    `

