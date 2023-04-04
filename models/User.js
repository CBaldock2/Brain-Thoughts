const { Schema, model } = require('mongoose');

// Creates the User Collection
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);

// Creates a virtual propery 'count' that gets the amount of friends
userSchema
    .virtual('getCount')
    .get(function () {
        return this.friends.length
    })

const User = model('User', userSchema);

module.exports = User;