const Users = require('../models/users.models')

const findAllUsers = async () => {
    const users = await Users.findAll() 
    return users
}

const findUserById = async (id) => {
    const foundUser = await Users.findOne({
        where: {
            id:id
        }
    })
    return foundUser
}

const createUser = async (obj) => {
    const newUser = await Users.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday,
    })
    return newUser
}

const updateUser = async (id, obj) => {
    const data = await Users.update(obj, {
        where: {
            id:id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id:id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
}