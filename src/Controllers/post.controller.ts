import { postServices } from "../Services/post.service";
import { Request,Response } from "express";
import { PostschemaValidate } from "../Models/posts";

class postController {
    addpost = async (req: Request,res: Response) => {
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }

        const {error,value} = PostschemaValidate.validate(data);

        if(error) {
            res.send(error.message);
        } else {
            const post = await postServices.createPost(value);
            res.status(201).send(post);
        }
    }

    getpost = async (req: Request ,res: Response) => {
        console.log(res)
        const posts = await postServices.getPosts();
        res.send(posts);
    }

    getApost = async (req: Request, res: Response) => {
        const id  = req.params.id;
        const post = await postServices.getPost(id);
        res.send(post);
    }

    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id;
        const post = await postServices.updatePost(id, req.body);
        res.send(post);
    }

    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id;
        await postServices.deletePost(id);
        res.send("Post Deleted");
    }
}

export const PostController = new postController();