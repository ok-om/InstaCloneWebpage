import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import Nav from "../../shared/components/Nav";

const Feed = () => {
    const {feed,handelgetfeed,loading,handellike,handeunllike} = usePost()


    useEffect(() => {
      handelgetfeed()
    }, [])

    if (loading || !feed) {
        return (<main><h1>Feed is Loading...</h1></main>)
    }

    console.log(feed)
    
  return (
    <div className="feed-page">
      <Nav/>
      <div className="feed">
        <div className="posts">
          {feed.map((post,id)=>{
            return<Post key={id}  user={post.user} post={post} loading={loading} handellike={handellike} handeunllike={handeunllike} />
          })}

        </div>
      </div>
    </div>
  );
};

export default Feed;
