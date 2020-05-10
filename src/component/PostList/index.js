import React from 'react';
import PropTypes from 'prop-types';


const PostList = props => {

    const {posts} = props

    const showPost = (posts) => {
        return (
            <ul className="list-group-item">
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div>
            {showPost(posts)}
        </div>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;
