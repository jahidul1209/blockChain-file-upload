import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom';
const Axios = require('axios');


const  Assets =(props) => {

        const {id} = useParams()
        const [items, setItems] = useState([]);
        const [username, setUserName] = useState('');
        const [account, setAccount] = useState('');
    
          useEffect(() => {
            Axios.get("http://localhost:3001/users/get")
             
              .then((response) => {
                  setItems(response.data);
                }
              )
              .catch(()=> { 
                console.log('Swallowed!') 
              });
          }, [])
          // const getfetchdata = () =>{
          //   Axios.get("http://localhost:3001/users/get").then((response) => {
          //     for(var i = 0; i < response.data.length; i++){
          //                 setUserName(response.data[i].UserName);
          //                 setAccount(response.data[i].Account)
          //     }
          //   });
          // }

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
                                               <div style = {{fontSize : '16px', paddingBottom:'5px'}}><span><span style = {{fontSize : '18px'}}>Category : </span><span style = {{textTransform: 'capitalize'}}>{product.category}</span></span></div>
                                             
                                               {items.map((users) => { 
                                                 return(
                                                   <>
                                                    {product.owner === users.Account ?
                                                     <div style = {{fontSize : '16px'}}><span style = {{fontSize : '18px'}}>Owned by :</span><span> {users.UserName} </span></div>
                                                     : null }
                                                     </>
                                                     )  
                                                    })}
                                               <div style = {{fontSize : '14px' , color:'#4a4a4a' ,padding: '20px 0px'}}><span>{product.description.slice(0,200).split(' ').slice(0, -1).join(' ')}</span></div>
                                            <div className = 'nft-ass-value'> 
                                                <div style = {{fontSize : '14px'}}><span>Current Price</span></div>
                                                <div className = 'cat-value'><span>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</span> </div>
                                                <Button 
                                                     className = "createBtn mt-4"
                                                     name = {product.id}
                                                     value = {product.price}
                                                     onClick = {(event) =>{
                                                        props.purchaseProduct(event.target.name , event.target.value)
                                                     }}
                                                     >Buy Now
                                                     </Button>
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