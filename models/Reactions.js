const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            defualt: () => new Types.ObjectId
        },
        reactionBody : {
            type: String,
            require: true,
            maxLength: 280
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

reactionSchema
    .virtual('formatCreateAt')
    .get(function () {
        return new Date(this.createdAt).toLocaleDateString();
    })

module.exports = reactionSchema;