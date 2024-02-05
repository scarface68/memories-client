import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import axios from "axios";

import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return posts.length===0 ? (
    <div>
      <CircularProgress />
      <h2>Create some memories</h2>
    </div>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
