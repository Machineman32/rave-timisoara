import PostEvent from "../models/eventMessage.js";

export const getEvents = async (req, res) => {
    const body = req.body

    try {
        const postEvents = await PostEvent.find()

        console.log(postEvents)

        res.status(200).json(postEvents)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEvents = async (req, res) => {
    const event = req.body

    const newEvent = new PostEvent(event)

    try {
        await newEvent.save();

        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}