import React, { Component } from 'react';
import axios from 'axios';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core/";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const WhiteTextTypography = withStyles({
  root: {
    color: "darkblue"
  }
})(Typography);

class Contribute extends Component {

    onSubmit = async(event) => {
        event.preventDefault();
        if (this.state.fileSelected) {
            const options = {
                headers : {
                    "Authorization": `Bearer ${process.env.REACT_APP_WEB3TOKEN}`,
                }
            };
            axios.post("https://api.web3.storage/upload", this.fileinput.current.files[0], options)      
            .then((result)=>{
                const url = "https://"+result.data.cid+".ipfs.dweb.link";
                this.props.addContent(
                    this.courseinput.current.value, 
                    this.subjectinput.current.value, 
                    url
                );
            })
            .catch((error) => {
                console.log("Error: ", error.message);
            })
        }
    };
  
    constructor(props) {
        super(props);
        this.fileinput = React.createRef();
        this.courseinput = React.createRef();
        this.subjectinput = React.createRef();
        this.state={
            fileSelected: false
        }
    };
  
    render() {
      return (
        <div>
            <center>
            <br/>
            <h1 style={{color: 'black'}}><strong>EduChain</strong></h1>            
            <br/><br/><br/>
            <Typography component="h1" variant="h5">
                <h1 style={{color: 'darkblue'}}>Contribute your Content</h1>                    
            </Typography>
            <br/>
            <div style={{width:700, padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 3, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#bdc0ff"}} >
            <div style={{width:600}}>
              <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                <div class="mb-3">
                    <br/>
                    <label for="exampleFormControlTextarea1" class="form-label"><h3 style={{ color: "Navy" }}>Course</h3></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" ref={this.courseinput} placeholder="Enter the course pertaining to the content" required />
                </div>
                <br/><br/>
  
                <div class="mb-3">
                  <br/>
                  <label for="exampleFormControlTextarea1" class="form-label"><h3 style={{ color: "Navy" }}>Subject / Topic</h3></label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" ref={this.subjectinput} placeholder="Enter the subject or topic" required />
                </div>
                <br/><br/>

                <div class="mb-3">
                  <label for="formFile" class="form-label"><h3 style={{ color: "Navy" }}>Upload Material</h3></label>
                  <input type="file" class="form-control" id="formFile" ref={this.fileinput} onChange={(event) =>{
                    event.preventDefault();
                    if (this.fileinput.current.files[0]){
                        this.setState({ fileSelected:true })
                    }
                }} />
                </div>
                <br/><br/>

                <button type="submit" class="btn btn-primary mb-3">Contribute</button>
                <br/><br/>
              </form>
            </div>
          </div>
          </center>
          <br/><br/><br/><br/>
        </div>
        
      );
    }
}
  
  
export default Contribute;