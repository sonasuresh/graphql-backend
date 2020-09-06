const {PubSub} = require('apollo-server')

const pubsub=new PubSub()

const topics={
    USER_CREATED:'USER_CREATED',
    TEST:'TEST'
}

const subscriptions={
    userCreated:{
        subscribe:()=> pubsub.asyncIterator([topics.USER_CREATED])
    },
    testSubscribe:{
        subscribe:()=> pubsub.asyncIterator([topics.TEST])
    },
}

module.exports={
    pubsub,
    topics,
    subscriptions
}