const usersController = {};

const UserModel = require('../models/User');

// Get Users
usersController.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
};

// Save a user
usersController.createUser = async (req, res) => {
    const {name, email, password} = req.body;
    // saving to database    
    const newUser = new UserModel(
        {name: name, email: email, password: password});
    await newUser.save();
    res.json({message: 'user created'})
};

// delete a user
usersController.deleteUser = async (req, res) => {
    await UserModel.findOneAndDelete({_id: req.params.id});
    res.json({message: 'user deleted'})
};

module.exports = usersController; 
