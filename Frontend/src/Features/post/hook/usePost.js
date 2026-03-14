import { getFeed, likePost, unlikePost } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";
import {createPost} from "../services/post.api";


export const usePost = () =>{
    const context = useContext(PostContext)

    const {loading,setLoading,post,setPost,feed,setFeed} = context;


    const handelgetfeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts.reverse())
        setLoading(false)
    }

    const handelCreatePost =  async (imageFile,caption) =>{
        setLoading(true)
        const data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
    }

    const handellike = async (post) => {
      
        const data = await likePost(post)
        await handelgetfeed()
        
        
    }

        const handeunllike = async (post) => {
       
        const data = await unlikePost(post)
        await handelgetfeed()
        
    }


    useEffect(()=>{
   handelgetfeed()
    },[])
    return {loading,feed,post,handelgetfeed,handelCreatePost,handellike,handeunllike}
}