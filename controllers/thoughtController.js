const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Not a thought in the world!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thoughtId } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought was created from no brain!' })
                    : res.json('Had a Thought!')
            )
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Not a thought in the world!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {

    }
}