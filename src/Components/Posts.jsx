import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='postHolder'>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
