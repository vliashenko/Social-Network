import React, { useState } from 'react';
import {
    FavoriteBorderOutlined,
    FavoriteOutlined,
    TextsmsOutlined,
    ShareOutlined,
    MoreHoriz
} from '@mui/icons-material'

import './Post.scss';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);

    const liked = false;

    return (
        <div className='post'> 
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="user" />
                    <div className="details">
                        <Link to={`profile/${post.userIf}`} style={{textDecoration: 'none', color: 'inherit'}}>
                            <span className='name'>
                                {post.name}
                            </span>
                        </Link>
                            <span className='date'>
                                1 min ago
                            </span>
                    </div>
                </div>
                    <MoreHoriz/>
            </div>
            <div className="content">
                <p>
                    {post.desc}
                </p>
                {post.img && <img src={post.img} alt="postimg" />}
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteOutlined/> : <FavoriteBorderOutlined/>}
                    12 Likes
                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <TextsmsOutlined />
                    10 Comments
                </div>
                <div className="item">
                    <ShareOutlined/>
                    Share
                </div>
            </div>
            {commentOpen && <Comments/>}
        </div>
        </div>
    );
};

export default Post;