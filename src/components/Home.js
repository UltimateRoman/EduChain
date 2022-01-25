import React, {Component} from 'react';
import Banner from "./assets/svg/wave (10).svg";
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
                <section id="hero-section">
                <div className="container-fluid-hero">
                    <div className="row">
                    <div className="col-lg-6 hero-intro">
                        <h1>
                        Contribute Study Materials and help other students
                        <span>.</span>
                        </h1>
                        <p>
                        EduChain supports students by providing a public platform to access study materials without having to rely
                        on pirated contents or resources. Receive $ECT token rewards for your contribution!                        </p>
                        <br />
                        
                    </div>
                    <br /><br />
                    <div className="col-lg-6 hero-image pt-5 pl-5">
                    
                    </div>
                    </div>
                </div>
                <img className="hero-wave" src={Banner} alt="hero-wave" />
                
                </section>                       
            </React.Fragment>
        );
    }
}

export default Home;