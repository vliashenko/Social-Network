import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './Stories.scss';

const stories = [
    {
        id: 1,
        name: "James Cosby",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name: "James Cosby",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        name: "James Cosby",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        name: "James Cosby",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser.profilePic} alt="story" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => {
                return (
                    <div key={story.id} className="story">
                        <img src={story.img} alt="story" />
                        <span>{story.name}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default Stories;