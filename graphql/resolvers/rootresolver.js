const userQuery = require('../resolvers/user/userQuery')
const userMutation = require('../resolvers/user/userMutation')
const subscriptions=require('../resolvers/subscription')

const rootResolver={
    RootQuery:{
        ...userQuery
    },
    RootMutation:{
        ...userMutation
    },
    RootSubscription:{
        ...subscriptions.subscriptions
    }
}

module.exports=rootResolver