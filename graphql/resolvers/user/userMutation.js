const User=require('../../../mongoose/models/User')
const {topics,pubsub} = require('../subscription')

const createUser = (parent,args)=>{
    try {
        const user=new User({
            name:args.CreateUserInput.name,
            mobile:args.CreateUserInput.mobile,
            email:args.CreateUserInput.email
        })
        user.save()
        // console.log(pubsub)
        // pubsub.publish(subcription.topics.USER_CREATED,{userCreated:{message:`New User Created ${user.name} with mobile Number ${user.mobile}`}})
        return user;
    } catch (error) {
        throw new Error("Error in user resolver "+error)
    }
}
const test=(parent,args)=>{
    try {
        console.log(pubsub)
        pubsub.publish(topics.TEST,{testSubscribe:'test called subs'})
        console.log(pubsub)

        return "test method called"
    } catch (error) {
        throw new Error("Error in user resolver "+error)
        
    }
}


module.exports={
    createUser,
    test
}