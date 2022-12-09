import React from 'react';
import Posts from '../../components/posts/Posts'
import {
    FacebookTwoTone,
    LinkedIn,
    Instagram,
    Pinterest,
    Twitter,
    Place,
    Language,
    EmailOutlined,
    MoreVert
} from '@mui/icons-material';
import './Profile.scss';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="images">
                <img src="https://ru.reactjs.org/logo-og.png" alt="cover" className='cover' />
                <img src="https://avatars.githubusercontent.com/u/87814580?v=4" alt="profile" className='profilePic' />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://facebook.com">
                            <FacebookTwoTone fontSize='large' />
                        </a>
                        <a href="https://facebook.com">
                            <Instagram fontSize='large' />
                        </a>
                        <a href="https://facebook.com">
                            <Twitter fontSize='large' />
                        </a>
                        <a href="https://facebook.com">
                            <Pinterest fontSize='large' />
                        </a>
                        <a href="https://facebook.com">
                            <LinkedIn fontSize='large' />
                        </a>
                    </div>
                    <div className="center">
                        <span>James Cosby</span>
                        <div className="info">
                            <div className="item">
                                <Place />
                                <span>UA</span>
                            </div>
                            <div className="item">
                                <Language />
                                <span>vliashenko</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlined />
                        <MoreVert />
                    </div>
                </div>
            </div>
            <div className="posts">
                <Posts/>
            </div>
        </div>
    );
};

export default Profile;