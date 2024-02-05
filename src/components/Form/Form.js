import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import axios from "axios";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: "", title:"", message:"", tags:"", selectedFile:""
    });
    const [root, paper, form, fileInput, buttonSubmit ] = [
          {
              marginBottom: '8px',
          },
          {
            padding: '16px',
          },
          {
            display: 'flex',
            margin: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
          {
            width: '97%',
            margin: '10px 0',
          },
          {
            marginBottom: 10,
          }          
    ];
   function handleSubmit(e){
      e.preventDefault();
      try {
        axios.post(process.env.REACT_APP_BACKEND_URL + "/posts", postData);
      } catch (error) {
        console.log(error);
      }
      clear();
    }
    function clear(){
      setPostData({creator: "", title:"", message:"", tags:"", selectedFile:""});
    }
    return(
        <Paper style={paper} >
            <form style={form} autoComplete="off" nonValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Create a memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => {setPostData({...postData,creator: event.target.value});}} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => {setPostData({...postData,title: event.target.value});}} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => {setPostData({...postData,message: event.target.value});}} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => {setPostData({...postData,tags: event.target.value});}} />
                <div style={fileInput}> <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} /> </div>
                <Button style={buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;