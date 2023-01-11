import "./App.css";
import { useState, useEffect } from "react";
import Post from "./components/Posts";
import * as React from "react";
import { Pagination } from "@mui/material";

function App() {
  const [posts, setPosts] = useState();

  function getPosts(skip = 0, limit = 10) {
    fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      
      {posts &&
        posts.map((post) => {
          return <Post post={post} />;
        })}

<Pagination
        count={5}
        shape="rounded"
        color="primary"
        onChange={(e, page) => {
          getPosts((page - 1) * 10);
        }}
      />
    </div>
  );
}

export default App;
