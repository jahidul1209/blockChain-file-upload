import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap';
import ipfs from '../ipfs'
import Marketplace from '../../abis/Marketplace.json'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
          account: '',
          buffer: null,
          loading: true,
          contract: null,
          imageHash: '',
          imgSrc: null,
          imgName:null,
          category:'',
        }
      }
      async componentWillMount() {
        await this.loadBlockchainData()
      }

      async loadBlockchainData() {
        const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Marketplace.networks[networkId]
        if(networkData) {
          const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
          this.setState({ marketplace })
          this.setState({ loading: false })
        } else {
          window.alert('Marketplace contract not deployed to detected network.')
        }
    
      }

      captureFile = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        this.setState({ imgName: [file.name]})
        //for blockChain Buffer Array
        const readerBlock = new window.FileReader()
        readerBlock.readAsArrayBuffer(file)
        //for upload preview image 
        var reader = new FileReader();
        reader.readAsDataURL(file);
     
        reader.onloadend = () => {
          this.setState({ imgSrc: [reader.result]})
          this.setState({ buffer: Buffer(readerBlock.result) })
        }
      }

      onChangeCategory = (event) => {
        const category = event.target.value;
        this.setState({ category: category})
     }
   
   createProduct(name, imageHash, price ,category, description) {
        console.log("Submitting file to ipfs...")
        ipfs.add(imageHash, (err, ipfsHash) => {
          console.log('Ipfs result', ipfsHash);
          console.log('from:'+ this.state.account)
          this.setState({ imageHash:ipfsHash[0].hash });
   
             this.setState({ loading: true })
             this.state.marketplace.methods.createProduct( name, ipfsHash[0].hash , price ,category, description).send({ from: this.state.account })
             .once('receipt', (receipt) => {
               this.setState({ loading: false })
               window.location.load()
             })     
         })
        
     }
    render() {

        return (
          
          <div className = 'container'>
            { this.state.loading 
              ? <div id="loader" className="text-center"><p className="text-center">Pendding...</p></div>
                 : <>
              <div className = 'mt-5 mb-3 CreteClton'>  <h1>Create Your Collection</h1> </div>
              <hr></hr>
              <div className = "formClass">
                  <form onSubmit={(event) => {
                      event.preventDefault()
                        const name = this.productName.value
                        const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                        const description = this.productDescription.value
                        const imageHash = this.state.buffer
                        const category = this.state.category
                        //data send to solidity
                      this.createProduct(name, imageHash, price,category, description )
                      }}>
                <div className="col-lg-8 py-4 mx-auto">

                      {/* <!-- Upload image input--> */}
                      <label class="CollectionForm--label" for="featuredImage">Featured image*</label>
                      <p>This image will be used for featuring your collection on the homepage or other promotional areas of Eternity. 600 x 400 recommended</p>
                      <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                            <input id="upload" type="file" for="featuredImage" onChange={this.captureFile} className="form-control border-0" accept=".png, .jpg, .jpeg, .gif, .tiff" />
                            <label id="upload-label" for="upload" className="font-weight-light text-muted">Choose Image</label>
                          <div className="input-group-append">
                                <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Choose Image</small></label>
                            </div>
                      </div>
                        {/* <!-- Uploaded image area--> */}
                      <p className="font-italic text-center">The image uploaded will be rendered inside the box below.</p>
                      <div className="image-area mt-4 text-center">
                          <img id="imageResult" src={this.state.imgSrc}  alt="" className="img-fluid rounded shadow-sm mx-auto d-block"/>
                          <p>{this.state.imgName}</p>
                       </div>
                       <div className="form-group mr-sm-2 mb-4">
                            <label class="CollectionForm--label" for="name">Name*</label>
                            <input
                               id="productName"
                               type="text"
                               for="name"
                               ref={(input) => { this.productName = input }}
                               className="form-control"
                               placeholder="Name"
                               required />
                         </div>
                          <div className="form-group mr-sm-2  mb-4">
                          <label class="CollectionForm--label" for="price">Price of NFT*</label> 
                          <input
                              id="productPrice"
                              type="number"
                              for="price"
                              ref={(input) => { this.productPrice = input }}
                              className="form-control"
                              placeholder="Price"
                              required />
                          </div>
                          <div className="form-group mr-sm-2  mb-4">
                              <label class="CollectionForm--label" for="category">Add Category*</label> 
                                 <Form.Control
                                      as="select"
                                      custom
                                      for="category"
                                      onChange={this.onChangeCategory}
                                      >
                                      <option selected>Select Category</option>
                                      <option value="arts">Arts</option>
                                      <option value="music">Music</option>
                                      <option value="tradingCard">Trading Card</option>
                                      <option value="collectibles">Collectibles</option>
                                      <option value="sports">Sports</option>
                                      <option value="utility">Utility</option>
                                    </Form.Control>
                            </div>
                            <div className="form-group mr-sm-2  mb-4">
                            <label class="CollectionForm--label" for="description">Description</label> 
                            <p>Here 0 of 1000 characters used</p>
                              <textarea
                                  id="productDescription"
                                  type="textarea"
                                  for="description"
                                  rows="5"
                                  ref={(input) => { this.productDescription = input }}
                                  className="form-control"
                                  placeholder="Description"
                                  required />
                              </div>
                              <Button  type = 'submit'  className = "createBtn">Create Now</Button>
                 </div>


                </form>
             </div>
               </> }
           </div>
        )
    }
}
export default  Create