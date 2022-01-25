import React, {Component} from 'react';
import logo from '../logo.png';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <br></br>
                <h1 style={{textAlign: "center", color: "black", fontSize:"70px"}}>EduChain</h1>
                <br/>
                <h3 style={{textAlign: "center", color: "blue"}}>By Team Allies</h3>
                <br></br>
                <center>
                    <img src={logo} alt="logo"/>
                </center>
                <br/><br/><br/>                        
            </React.Fragment>
        );
    }
}

export default Home;