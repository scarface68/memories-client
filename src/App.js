import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import image from "./images/memories.png"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"

function App(){

      const [appBar, heading, imag] = [{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },{color: 'rgba(0,183,255, 1)',},{marginLeft: '15px',}];
    return(
        <Container maxwidth="lg">
            <AppBar style={appBar} position="static" color="inherit">
                <Typography style={heading} variant="h2" align="center">Memories</Typography>
                <img style={imag} src={image} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />                         
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;