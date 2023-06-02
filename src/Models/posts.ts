import { Schema,model } from "mongoose";
import Joi from "joi";

// validation Schema

export const PostschemaValidate = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required()
});

interface IPosts {
    title: string,
    author: string,
    description: string,
    published: boolean,
}

const postSchema = new Schema<IPosts>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    published: {
        type: Boolean,
        required: true,
        default:  false,
    },
})
    
export const Post = model<IPosts>("Post",postSchema,"posts");