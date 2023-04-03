const { connect, connection } = require('mongoose');

connect('mongodb://localhost/brainThought', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection