import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Collections extends Component {
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
            <div className = 'collections'>           
            <div className = 'row'>
                    <div className = 'col-md-3'>
                        <Sidebar/>
                    </div>
                    <div className = 'col-md-8 tttt'>
                      <div className = 'mt-5 mb-3 CreteClton'>  
                         <h1  >My Collections</h1> 
                        <p className = 'pt-3 pb-4'>Create, curate, and manage collections of unique NFTs to share and sell.</p>
                        <Link to="/eternity/create"><Button className = "createBtn">Create a Collectios</Button></Link>
                      </div>
                       <hr></hr> 
                       {this.props.account ? 
                            <div className = 'collectionCard  mt-5'>
                        { this.state.loading 
                              ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                              : <>
                            { this.props.products.map((product) => { 
                                return(
                                    <>
                                    { product.owner === this.props.account ?

                                   
                                    <div className = 'nft-card-collection'>
                                    <Nav.Link >  
                                    <Link to="#">
                                    <div className = 'nft-home-card'>
                                             <div className = 'carsl-image'> <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /></div> 
                                               
                                                  <div className = 'nft-cat-car'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer pt-4'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '15px' , color:'#4a4a4a' }}><span>{product.description.slice(0,80).split(' ').slice(0, -1).join(' ')}</span></div>
                                                    </div>
                                                  </div> 
                                            </div>
                                    </Link> 
                                    </Nav.Link >    
                                    </div>
                                     : null
                                     }
                                    </>
                                )
                                })} 
                                </>
                               }
                            </div>

                         : 
                         <div className = 'no-items'>
                          <h1>No items to display</h1>
                         </div >
                       }
                      
                    </div>
            </div>


            
        </div>
        )
    }
}

export default Collections
