import React, { Component } from 'react';
import Web3 from 'web3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EduchainMain from '../abis/EduchainMain.json';
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.celo) {
        await window.celo.enable();
        window.web3 = new Web3(window.celo);
    }
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.alert('Use the Celo Extension Wallet!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    this.setState({ loading: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      loading: false
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h1>EduChain</h1>
        </nav>
      </div>
    );
  }
}

export default App;
