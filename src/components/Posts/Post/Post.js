import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Popover,
  IconButton,
} from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const Post = ({ post }) => {
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${post._id}`);
    handleClose();
    window.location.reload();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
          aria-describedby={id}
          style={{ color: "white" }}
          size="small"
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <DeleteIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            Are you sure you want to delete?
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <IconButton style={{ color: "green" }} onClick={handleDelete}>
              <CheckIcon />
            </IconButton>
            <IconButton style={{ color: "red" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </Popover>
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
