import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import PostArea from './PostArea';
import Post from './Post';
import db from './Firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => 
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* PostArea */}
            <PostArea />

            {posts.map((post) => (
                <Post 
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    caption={post.data.caption}                
                    image={post.data.image}
                />
            ))}

        </div>
    )
}

export default Feed;
