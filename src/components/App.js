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
      const networkId = await window.web3.eth.net.getId();
      if (networkId === 44787) {
        this.setState({ network: "Alfajores" });
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const networkId = await window.web3.eth.net.getId();
      if (networkId === 44787) {
        this.setState({ network: "Alfajores" });
      }
    } else {
      window.alert('Use the Celo Extension Wallet!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = EduchainMain .networks[networkId];

    if (networkData) {
      const ECMain = new web3.eth.Contract(EduchainMain.abi, networkData.address);
      this.setState({ ECMain });
      const cCount = await ECMain.methods.contentCount().call();
      for (let i = 0; i < cCount; ++i) {
        const content = await ECMain.methods.contents(i).call();
        this.setState({
          contents: [...this.state.contents, content]
        });
      }
    } else {
      window.alert('The current network is not supported, use Celo Alfajores Testnet');
    }
    this.setState({ loading: false });
  }

  async getContributor(file) {
    this.setState({ loading: true });
    const contributor = await ECMain.methods.getContributor(file).call();
    this.setState({ loading: false });
    return contributor;
  }

  tipContributor(contributor, amount) {
    this.setState({ loading: true });
    window.web3.eth.sendTransaction({ 
      from: this.state.account, 
      to: contributor,
      value: window.web3.utils.toWei(amount.toString())
    })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false });
      window.location.reload();
      window.alert('Successfully funded '+contributor);
    });
    this.setState({ loading: false });
  }

  addContent(course, subject, file) {
    this.setState({ loading: true });
    this.state.ECMain.methods.addContent(course, subject, file)
    .send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false });
      window.location.href = '/resources';
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      loading: false,
      ECMain: null,
      contents: [],
      network: "Unidentified"
    }

    this.addContent = this.addContent.bind(this);
  }

  render() {
    if (this.state.network !== "Unidentified") {
      return (
        <div style={{ height: 800 }}>
          <Router>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
              <h1>EduChain</h1>
            </nav>
          </Router>
        </div>
      );
    } else {
      return(
        <p style={{textAlign: "center", fontSize: "30 px"}}>Your current browser is not supported. Install Celo Extension wallet and use Celo Alfajores Testnet.</p>
      );
    }
  }
}

export default App;
