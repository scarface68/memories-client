import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from "@mui/material";
import axios from "axios";

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://memories-sai-mern.herokuapp.com/posts").then((res) => {
          setPosts(res.data);
    })
  }, []);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
    
  );
};

export default Posts;