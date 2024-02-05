import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ post, setCurrentId }) => {
  const [
    media,
    border,
    fullHeightCard,
    card,
    overlay,
    overlay2,
    grid,
    details,
    title,
    CardActions,
  ] = [
    {
      height: 0,
      paddingTop: "56.25%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "darken",
    },
    {
      border: "solid",
    },
    {
      height: "100%",
    },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      height: "100%",
      position: "relative",
    },
    {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
    },
    {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
    },
    {
      display: "flex",
    },
    {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
    },
    {
      padding: "0 16px",
    },
    {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
    },
  ];
  
  return (
    <Card style={card}>
      <CardMedia
        style={media}
        image={post.selectedFile || `https://picsum.photos/500/500`}
        title={post.title}
      />
      <div style={overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div style={details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography style={title} gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
