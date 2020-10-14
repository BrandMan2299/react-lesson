import React from 'react';

export default function Comments({ comments }) {
    return (
        <ul>
            {comments.length ? comments.map((comment, i) => (
                <div className="item" key={i}>
                    <div className="title"><b>Title:</b> {comment.title}</div>
                    <div className="content"><b>Content:</b> {comment.content}</div>
                    <div className="name"><b>By:</b> {comment.name}</div>
                </div>
            )) : <h2>No Comments Yet</h2>}
        </ul>
    )
}