import React from 'react';
import { pictures } from '../../assets'

import './LeftBar.scss';

const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                <div className="user">
                    <img src="https://images.pexels.com/photos/8396725/pexels-photo-8396725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userpic" />
                    <span>James Cosby</span>
                </div>
                <div className="item">
                    <img src={pictures.Friends} alt="Friends" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={pictures.Groups} alt="Groups" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src={pictures.Market} alt="Market" />
                    <span>Market</span>
                </div>
                <div className="item">
                    <img src={pictures.Watch} alt="Watch" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src={pictures.Memories} alt="Memories" />
                    <span>Memories</span>
                </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                    <img src={pictures.Events} alt="Events" />
                    <span>Events</span>
                </div>
                <div className="item">
                    <img src={pictures.Gaming} alt="Gaming" />
                    <span>Gaming</span>
                </div>
                <div className="item">
                    <img src={pictures.Gallery} alt="Gallery" />
                    <span>Gallery</span>
                </div>
                <div className="item">
                    <img src={pictures.Videos} alt="Videos" />
                    <span>Videos</span>
                </div>
                <div className="item">
                    <img src={pictures.Messages} alt="Messages" />
                    <span>Messages</span>
                </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                    <img src={pictures.Fund} alt="Fundraiser" />
                    <span>Fundraiser</span>
                </div>
                <div className="item">
                    <img src={pictures.Tutorials} alt="Tutorials" />
                    <span>Tutorials</span>
                </div>
                <div className="item">
                    <img src={pictures.Courses} alt="Courses" />
                    <span>Courses</span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;