import React from "react";


const Posts = (props) => {
  return (
    <div>
      
      
       <h5>{props.post.title}</h5>
       <p>{props.post.body}</p>

      
    </div>
  );
};

export default Posts;
