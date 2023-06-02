import { Post } from "../Models/posts";

export class postService {
    async createPost(data: any){
        try {
            const newPost = await Post.create(data);
            return newPost;
        } catch (err) {
            console.log(err);
        }
    }

    async getPosts() {
        try {
            const posts = await Post.find({})
            return posts;
        } catch (err) {
            console.log(err);
        }
    }

    async getPost(id: string) {
        try {
            const post  = await Post.findById({_id: id});
            if(!post){
               return console.log("Post not available");
            }
            return post;
        } catch (err) {
            console.log(err);
        }
    }

    async updatePost(id: string, data: any) {
        try { 
            const postz = await Post.findByIdAndUpdate({_id:id}, data, {new:true});
            if(!postz) {
                return console.log("posts not available for update");
            }
            return postz;
        } catch (err) {
            console.log(err);

        }
    }

    async deletePost(id: string) {
        try { 
            const post = await Post.findByIdAndDelete(id);
            if(!post) {
                return console.log("posts not available for update");
            }

            return post;
        } catch (err) {
            console.log(err);
            
        }
    }
}

export const postServices = new postService();