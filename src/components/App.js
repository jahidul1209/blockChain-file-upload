import React, { Component } from 'react';
import Web3 from 'web3'
// import ipfs from './ipfs'
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Header from './Header'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Pages
import Home from './pages/Home';
import Create from './pages/Create';
import AllNfts from './pages/marketplace/AllNfts';

import Arts from './pages/marketplace/Arts';
import Music from './pages/marketplace/Music';
import TradingCard from './pages/marketplace/TradingCard';
import Collectibles from './pages/marketplace/Collectibles';
import Sports from './pages/marketplace/Sports';
import Utility from './pages/marketplace/Utility';
import Support from './pages/Support';
import Partners from './pages/resources/Partners';
import AccountSetting from './pages/settings/AccountSetting';
import Profile from './pages/settings/Profile';
import Sidebar from './pages/settings/Sidebar';
import Collections from './pages/settings/Collections';
import Assets from './pages/Assets';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance:'',
      productCount: 0,
      products: [],
      productAcs: [],
      product: [],
      productOne: [],
      productHome:[],
      productMusic:[],
      productArt:[],
      productSports:[],
      productUtility:[],
      productColl:[],
      productTrading:[],
        imageHash: '',
       buffer: null,
      loading: true,
      contract: null,
    }
  }
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      if (!window.ethereum.autoRefreshOnNetworkChange) { 
        window.ethereum.on('chainChanged', () => { 
          window.location.reload() 
        })
      }
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }

    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    await web3.eth.getBalance( accounts[0]).then(value => {
      this.setState (  { balance : web3.utils.fromWei(value, "ether")});
    });

    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      this.setState({ productCount })
      // Load products
      for (let i = productCount; i > 0 ; i--) {
        const product = await marketplace.methods.products(i).call()
        this.setState({product : product})
        this.setState({
          products: [...this.state.products, product]
        })
        if(i === productCount){
          this.setState({
            productOne:  [...this.state.products]
          })
        }
        if (i > productCount - 6) {
          this.setState({
            productHome:  [...this.state.products]
          })
        }
        }
      for (let i = 1; i <= productCount ; i++) {
        const productAc = await marketplace.methods.products(i).call()
        this.setState({
          productAcs: [...this.state.productAcs, productAc]
        })
        if(productAc.category ==='arts'){
                this.setState({
                  productArt:  [productAc]
                })
        }
          if(productAc.category ==='music'){
              this.setState({
                productMusic: [productAc]
              })
          }
          if(productAc.category ==='sports'){
              this.setState({
                productSports: [productAc]
              })
          }

          if(productAc.category ==='collectibles'){
              this.setState({
                productColl:  [productAc ]
              })
          }
            if(productAc.category ==='tradingCard'){
                this.setState({
                  productTrading: [productAc ]
                })
            }

            if(productAc.category ==='utility'){
                this.setState({
                  productUtility: [productAc ]
                })
            }
        }

      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }

  }

  // purchaseProduct(id, price) {
  //   this.setState({ loading: true })
  //   this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price })
  //   .once('receipt', (receipt) => {
  //     this.setState({ loading: false })
  //   })
  //  }

  render() {
    console.log(this.state.product.category)
    return (
    
      <div >
         
          <Router>
              <div>
              <Header account={this.state.account}  balance={this.state.balance} />
                <Switch>
                <Route exact path="/eternity">
                         <Home  products={this.state.products}
                         productAcs={this.state.productAcs}
                         productOne={this.state.productOne}  
                         productHome = {this.state.productHome}  
                         productArt = {this.state.productArt}
                         productMusic = {this.state.productMusic} 
                         productSports = {this.state.productSports} 
                         productColl = {this.state.productColl}
                         productTrading = {this.state.productTrading} 
                         productUtility = {this.state.productUtility} />      
                 </Route>
                 {/* Marketplace */}
                  <Route path="/eternity/all-nfts">
                     <AllNfts   products={this.state.products}  />
                  </Route>
                  <Route path="/eternity/arts">
                     <Arts   products={this.state.products}  />
                  </Route>

                  <Route path="/eternity/music">
                     <Music   products={this.state.products}  />
                  </Route>
                  <Route path="/eternity/trading-card">
                     <TradingCard   products={this.state.products}  />
                  </Route>
                  <Route path="/eternity/collectibles">
                     <Collectibles   products={this.state.products}  />
                  </Route>
                  <Route path="/eternity/sports">
                     <Sports   products={this.state.products}  />
                  </Route>
                  <Route path="/eternity/utility">
                     <Utility   products={this.state.products}  />
                  </Route>

                  <Route path="/eternity/support">
                     <Support/>
                  </Route>
                  <Route  path="/eternity/create">
                     <Create/>
                  </Route>
                  <Route  path="/eternity/partners">      
                     <Partners/>
                  </Route>
                  <Route  path="/eternity/account-settings"> 
                    <AccountSetting/> 
                  </Route>
                  <Route  path="/eternity/profile">      
                     <Profile/>
                  </Route>
                  <Route  path="/eternity/collections">      
                     <Collections account={this.state.account} products={this.state.products} />
                  </Route>
                  <Route  path="/eternity/assets/:id">      
                     <Assets products={this.state.products}/>
                  </Route>
                </Switch>
                <Footer/>
              </div>
            </Router>
      </div>
    );
  }
}

export default App;
