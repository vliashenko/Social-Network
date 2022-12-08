import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './Comments.scss'

const comments = [
    {
        id: 1,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    },
    {
        id: 2,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    }
];

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="userpic" />
                <input type="text" placeholder='Write a comment'/>
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <img src={comment.profilePic} alt="commentuserpic" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">
                        1 hour ago
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Comments;