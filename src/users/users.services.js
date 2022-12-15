const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: err.message}))
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.findUserById(id)
        .then(data => {
            if(data){res.status(200).json(data)}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))

}

const postUser = (req, res) => {
    const obj = { first_name, last_name, email, password, birthday } = req.body
    usersControllers.createUser(obj)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({message: err.message}))

}

const patchUser = (req, res) => {
    const obj = { first_name, last_name, email, password, birthday } = req.body
    const id = req.params.id
    usersControllers.updateUser(id, obj)
        .then(data => {
            if(data){res.status(200).json({message: 'updated successfully'})}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))
}

const deleteUser = (req, res) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
        .then(data => {
            if(data){res.status(200).json({message: 'deleted successfully'})}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
}