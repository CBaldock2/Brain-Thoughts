const User = require('../models/User');

module.exports = {
    //GET all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //GET a single user using the userID parameter
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts friends')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID found!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //POST user using the request body
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err))
    },
    //PUT user using the userID parameter, setting new user info from the body
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user found with this ID!' })
        : res.json(user)
        )
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    //DELETE user using the userID parameter
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user with this id to delete!' })
        : res.json({ message: 'User deleted!'})
        )
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
    },
    //POST to add new friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {$addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ?res.status(404).json({ message: 'No user with this ID!' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //DELETE a friend from a user's friend list
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.params. friendId } } },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user fond with that ID!' })
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }
}