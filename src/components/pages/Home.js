import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


var backGroundImage = {
  width: "100%",
  height: "auto",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(0deg, rgb(255 255 255), rgb(255 255 255 / 67%)), url(${process.env.PUBLIC_URL +  '../eternity/image/backgroundimg.jpg'})`
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};  
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // products: [],
      loading: true,
      // account: '',
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
                    {/*Start  home Header */}
                        <section style={ backGroundImage } className = "home-Head pt-5 pb-5" >
                          <div className = 'container'>
                           <div  className = 'row mt-5 mb-5'>
                               <div className = 'col-md-6 homeText'>
                                   <h1>Turn any creation into blockchain item NFTs</h1>
                                   <p>On the world's first & largest <br></br> NFT marketplace</p>
                                   <div className = 'buttonHead mt-5'>  
                                        <Button className = "createBtn">Explore</Button>
                                        <Link to="/eternity/create"  className="nav-item">  <Button className = "createBtn2  mx-3">Create</Button> </Link>            
                                   </div>
                                </div> 
                                <div className = 'col-md-1'></div>
                                <div className = 'col-md-5'>
                                { this.state.loading 
                                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                                  : 
                                  <div className = 'homeCard'>
                                  { this.props.productOne.map((product) => { 
                                        return(
                                          <div className = 'nft-home-card'>
                                                <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                  <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '14px'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div> 
                                            </div>
                                        )
                                      })} 
                                    </div>
                                          }  
                                </div>
                              </div>
                            </div>     
                        </section>
                     {/*End  home Header */}
                     {/* carousel */}
                     <section className = "home-carousel" >
                          <div className = 'container'>
                             <Carousel responsive={responsive}>
                                  { this.props.productAcs.map((product) => { 
                                        return(
                                          <div className = 'nft-home-card'>
                                             <div className = 'carsl-image'> <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /></div> 
                                               
                                                  <div className = 'nft-cat-car'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer pt-4'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '15px' , color:'#4a4a4a' ,padding: '15px 25px'}}><span>{product.description.slice(0,100).split(' ').slice(0, -1).join(' ')}</span></div>
                                                    </div>
                                                  </div> 
                                            </div>  
                                        )
                                      })} 
                              </Carousel>
                            </div>
                        </section>

                      {/* Top Collectios */}
                        <div className="container pt-5 pb-5 ">
                          <div className = 'px-2 mb-3'><h2>Hot Collections </h2><hr></hr>
                          </div>
                          
                            <div className="row  text-center pt-3">
                              <main role="main" className="col-lg-12 d-flex">
                                { this.state.loading 
                                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                                  : 
                                  <div className = 'mainCard'>
                                  { this.props.productHome.map((product) => { 
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

                          {/* End Top Collectios */}

                          {/* Category wise select NFTS */}
                          
                          <section className = 'category-nft pt-5 pb-5'>
                            <div className = 'container'>
                            <div className = 'mb-3'><h2>Trending with all Categories</h2> <hr></hr></div>
                              <div className = 'row  pt-4'>
                                <div className = 'col-md-4'>
                                {/* { this.state.loading t
                                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                                  :  */}
                                  <div className = 'mainCard'>
                                  { this.props.productArt.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'>  
                                     <Link to="/eternity/arts">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                 
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link>   
                                    </div>
                                 )
                               })} 
                              </div>
                              <div className = 'mainCard mt-5'>
                                  { this.props.productColl.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'>
                                     <Link to="/eternity/collectibles">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                 
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link> 
                                    </div>
                                 )
                               })} 
                              </div>
                              </div>
                              <div className = 'col-md-4'>
                                  <div className = 'mainCard'>
                                  { this.props.productMusic.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'>
                                     <Link to="/eternity/music">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link>    
                                    </div>
                                 )
                               })} 
                             </div>
                             <div className = 'mainCard mt-5'>
                                  { this.props.productTrading.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'> 
                                     <Link to="/eternity/trading-card">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                 
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link>   
                                    </div>
                                 )
                               })} 
                              </div>
                              </div>
                              <div className = 'col-md-4'>
                                  <div className = 'mainCard'>
                                  { this.props.productSports.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'>
                                     <Link to="/eternity/sports">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link>   
                                    </div>
                                 )
                               })} 
                             </div> 
                             <div className = 'mainCard mt-5'>
                                  { this.props.productUtility.map((product) => { 
                                 return(
                                   <div className = 'nft-card-cat'>
                                     <Link to="/eternity/utility">
                                          <div className = 'text-right'><i class="far fa-heart"></i></div>
                                          <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                                                 
                                          <div className = 'nft-cat-na'>
                                                   <div className = 'iamgeCircle'>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" /> </div>
                                                   <div className = 'cart-footer'>
                                                      <div className = 'cat-value'><span>{product.name}</span></div>
                                                      <div style = {{fontSize : '16px' , textTransform: 'capitalize'}}><span>{product.category}</span></div>
                                                    </div>
                                                  </div>
                                      </Link>  
                                    </div>
                                 )
                               })} 
                              </div>
                              </div>
                            </div>
                            </div>
                         </section>

                        {/* Create and sell your NFTs */}
                        <section className = 'create-Sell-nfts mt-5 mb-5'>
                            <div className = "container"> 
                                  <div><h2>Create and sell your NFTs</h2> <hr></hr></div>
                                  <div className = "row pt-5">
                                    <div className = 'col-md-4'>
                                    <div className="card">
                                      <img className="card-img-top" src="https://opensea.io/static/images/icons/wallet.svg" alt="img"/>
                                        <div className="card-body">
                                          <h5 className="card-title">Set up your wallet</h5>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className = 'col-md-4'>
                                    <div className="card">
                                      <img className="card-img-top" src="https://opensea.io/static/images/icons/collection.svg" alt="img"/>
                                        <div className="card-body">
                                          <h5 className="card-title">Create your collection</h5>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className = 'col-md-4'>
                                    <div className="card">
                                      <img className="card-img-top" src="https://opensea.io/static/images/icons/wallet.svg" alt="img"/>
                                        <div className="card-body">
                                          <h5 className="card-title">List them for sale</h5>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </section>
                   </div>
        );
    }
}


export default Home;