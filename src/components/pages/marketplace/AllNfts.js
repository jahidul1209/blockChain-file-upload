import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


class AllNfts extends Component {


  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

    componentWillMount() {
     this.ifLoading()
  }
  
   ifLoading = ()=>{    
    if(this.props.products){
      this.setState({ loading: false })
    }
  }
    render() {
        return (
            <div >
           <div className="container mt-5">
           <div  className = 'text-center py-5 px-5'>
                      <h2>Explore All  Nfts</h2>
                      <p>NFTs are changing the way fans connect with their favorite artists. From 3LAU to Imogen Heap, all kinds of creators are innovating on the blockchain, and the appetite for change in an industry that so often underserves independent makers is clear.</p>
             </div>
          <div className="row  text-center'">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading 
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                 :
                 <div className = 'mainCard'>
                    { this.props.products.map((product) => {
                    return(
                     <div className = 'nft-card'>
                     <Link to={`/eternity/assets/${product.id}`}> 
                            <div className = 'text-right'># {product.id.toString()}</div>
                            <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                          <div className = 'nft-card-value'>
                            <div className = 'nft-cat-name'>
                                 <div style = {{fontSize : '12px'}}><span>{product.category}</span></div>
                                 <div className = 'cat-value'><span>{product.name}</span></div>
                            </div>
                            <div className = 'nft-price'>
                                  <div style = {{fontSize : '12px'}}><span>Price</span></div>
                                  <div className = 'cat-value'><span>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</span> </div>
                             </div>
                          </div> 
                        </Link>  
                      </div>
                   )
                  })}
               </div>
               } 
            </main>
          </div>
        </div>
            </div>
        );
    }
}

export default AllNfts;