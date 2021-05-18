import React, { useState } from 'react';
import './PostArea.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase';

function PostArea() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // DB Stuff
        db.collection("posts").add({
            profilePic: user.photoURL,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: input,
            image: imageURL,
        });

        setInput("");
        setImageURL("");
    }

    return (
        <div className="postArea">
            <div className="postArea_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} className="postArea_input" onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (Optional)" />
                    {/* Hidden Submit Button */}
                    <button onClick={handleSubmit} type="submit" > Post </button>
                </form>
            </div>
            <div className="postArea_bottom">
                <div className="postArea_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="postArea_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="postArea_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default PostArea;