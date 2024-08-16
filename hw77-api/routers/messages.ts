import express from "express";
import fileDb from "../fileDb";
import {IMessage, MessageWithoutId} from "../types";
import {imagesUpload} from "../multer";
const messagesRouter = express.Router();



messagesRouter.get('/', async (req, res) => {
    const messages = await fileDb.getMessages();
    return res.send(messages);
});

messagesRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    if(!req.body.message || !req.body.author){
        return res.status(400).send({"error": "Author and message must be present in the request"});
    }

    const message:MessageWithoutId = {
        message: req.body.message,
        author: req.body.author,
        image: req.file ? req.file.filename : null,
    }

    const savedMessage = await fileDb.addMessage(message)

    return res.send(savedMessage)
});


export default messagesRouter;