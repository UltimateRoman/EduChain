import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography"; 

const useStyles = ({
    root: {
      flexGrow: 1,
      //padding: theme.spacing(2)
    }
});

const WhiteTextTypography = withStyles({
  root: {
    color: "darkblue"
  }
})(Typography);


class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.tipinput = React.createRef();
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }  

    render() {
        const {classes} = this.props;
        let filteredContents = this.props.contents.filter((content) => {
            return content.subject.indexOf(this.state.search) !== -1;
        });

        return (
            <React.Fragment>
                <br/><br/>          
                <Typography component="h1" variant="h5" align="center" color="Secondary"  gutterBottom>
                    <WhiteTextTypography variant="h3"  >
                        Explore Study Materials and Resources
                    </WhiteTextTypography>
                </Typography>
                <br /><br/>
                <center>
                
                <div className={classes.root}>
                <center>
                <Grid>                    
                    <div style={{ width: 600 }}>
                    <h2 style={{color: "royalblue"}}>Search Topics</h2>
                    <br/>
                    <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    <br/><br/>
                    { filteredContents.map((content, key) => {
                        return(
                        <React.Fragment>
                            <div class="coupon" key={key} >
                                
                            <div className="card-header">
                            
                            <small style={{color: "white"}}></small>
                            </div>
                            
                            <ul id="postList" className="list-group list-group-flush">
                                <li key={key} className="list-group-item py-2">
                                <h2 style={{color: "royalblue"}}>{content.course}</h2>
                                <br/>
                                <h4 style={{color: "tomato"}}>Subject/Topic: {content.subject}</h4>
                                <br/>
                                <a href={content.file} target="_blank" rel="noopener noreferrer" >View Doc</a>
                                </li>
                            </ul>
                            <hr/>
                            
                            <h5 style={{color: "DarkCyan"}}>Tip the Contributor</h5>
                            <form onSubmit={(event)=>{
                                event.preventDefault();
                                const tip = this.tipinput.current.value;
                                this.props.tipContributor(content.contributor, tip);
                            }}>
                                <div class="form-group mx-sm-5 mb-2">
                                <input type="text" class="form-control" id="exampleFormControlInput1" ref={this.tipinput} placeholder="Enter amount in CELO" aria-describedby="basic-addon2" required />
                                </div>
                                <button type="submit" class="btn btn-primary mb-3">Tip</button>
                            </form>
                            </div>
                            <br/><br/>
                            <p>&nbsp;&nbsp;</p>
                        </React.Fragment>
                        )
                    })}
                    
                    </div>
                    
                </Grid>
                </center>
                </div>
                </center>
            </React.Fragment>
            );
    }

}

export default withStyles(useStyles)(Resources);