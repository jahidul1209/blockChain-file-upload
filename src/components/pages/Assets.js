import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom';

const  Assets =(props) => {

        const {id} = useParams()
         console.log(id)
     
        return (
            <>
            {props.products.map((product) => { 
              return(
                  <>
                {product.id === id ?
              <div className = 'container assets'>

                <div className = 'row mt-5 '>
                <div className = 'col-md-5 '>
                <div className = 'asset-card'>
                        <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "img" />
                </div>
                </div>
                <div className = 'col-md-1'></div>
                <div className = 'col-md-6'>
                                   <div className = 'nft-card-value'>
                                          <div className = 'nft-ass-name'> 
                                               <div className = 'ass-value'><span>{product.name}</span></div>
                                               <div style = {{fontSize : '16px', paddingBottom:'5px'}}><span><span style = {{fontSize : '18px'}}>Category : </span>{product.category}</span></div>
                                               <div style = {{fontSize : '16px'}}><span><span style = {{fontSize : '18px'}}>Owned by </span></span></div>
                                               <div style = {{fontSize : '14px' , color:'#4a4a4a' ,padding: '20px 0px'}}><span>{product.description.slice(0,200).split(' ').slice(0, -1).join(' ')}</span></div>
                                            <div className = 'nft-ass-value'> 
                                                <div style = {{fontSize : '14px'}}><span>Current Price</span></div>
                                                <div className = 'cat-value'><span>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</span> </div>
                                                <Button className = "createBtn mt-4">Buy Now</Button>
                                             </div>
                                           </div>
                                        </div>
                </div>
                </div>
          </div>
          : null
                }
            </>
              )})  }
         </>
      
        )
        
    }

export default Assets;