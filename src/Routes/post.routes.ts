import express from "express";
import { PostController } from '../Controllers/post.controller'

//initiating the router
export const router = express.Router()

//add post route
router.post('/', PostController.addpost)

//get posts
router.get('/', PostController.getpost)

//get single post
router.get('/:id',PostController.getApost)

//update post 
router.put('/:id',PostController.updatePost)

//delete post
router.delete('/:id', PostController.deletePost)

