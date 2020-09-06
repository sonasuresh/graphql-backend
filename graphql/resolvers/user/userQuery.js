const User=require('../../../mongoose/models/User')

const getUsers = ()=>{
    try {
        const Users=User.find({})
        return Users;
    } catch (error) {
        throw new Error("Error in user resolver "+error)
    }
}
const getUserByEmail = (parent, args)=>{
    try {
        const Users=User.findOne({email:args.email})
        return Users;
    } catch (error) {
        throw new Error("Error in  user resolver "+error)
    }
}

module.exports={
    getUsers,
    getUserByEmail
}