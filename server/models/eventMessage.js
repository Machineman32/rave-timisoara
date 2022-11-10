import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: String,
    email: String,
    headline: String,
    artists: [String],
    tags: [String],
    location: String,
    date: Date,
    image: String,
    petFree: Boolean,
    submitedAt: {
        type: Date,
        default: new Date()
    }
})

const PostEvent = mongoose.model('PostEvent', eventSchema)

export default PostEvent