import React from 'react';
import Post from '../post/Post';
import './Posts.scss';

const posts = [
    {
        id: 1,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        img: "https://ru.reactjs.org/logo-og.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    },
    {
        id: 2,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    }, {
        id: 3,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    }, {
        id: 4,
        name: "James Cosby",
        userId: 1,
        profilePic: "https://avatars.githubusercontent.com/u/87814580?v=4",
        img: "https://images.pexels.com/photos/7176464/pexels-photo-7176464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae iste commodi exercitationem enim modi ex nam odio suscipit, sapiente obcaecati tempora numquam ratione perspiciatis laudantium voluptatum fugit. Maiores, ex?",
    },
];

const Posts = () => {
    return (
        <div className='posts'>
            {posts.map(post => (
               <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default Posts;