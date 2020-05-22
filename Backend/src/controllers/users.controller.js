const usersController = {};

// Get notes
usersController.getUsers = (req, res) => {
    //console.log(req.user);
    res.json({message: 'get with a controller- users routes'})
};

usersController.createUser = (req, res) => {
    res.json({message: 'user created'})
};

usersController.deleteUser = (req, res) => {
    res.json({message: 'user deleted'})
};



module.exports = usersController; 
