import PostMessage from '../models/postMessage'

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find().lean()
        req.status(200).json(postMessage)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}