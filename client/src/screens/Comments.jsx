import React from 'react'

export default function Comments(props) {
  const { comments } = props;
  return (
    <div>
      <h3>Comments</h3>
      {
        comments.map(comment => {
          return (
            <div key={comment.id} >
              <p> {comment.content}</p>
            
            </div>
          )
        })
      }
    </div>
  )
}