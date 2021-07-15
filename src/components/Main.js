import React, { Component } from 'react';

class Main extends Component {

   constructor(props) {
    super(props)

    this.state = {
      imageHash: '',
      buffer: null,
    }
  }
  async componentWillMount() {
    await this.loadBlockchainData()
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  async loadBlockchainData() {
      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
  }

  render() {
    return (
      <div id="content">
        <h1>Create your collection</h1>
        <hr></hr>
        <div className = "formClass">
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const description = this.productDescription.value
          const imageHash = this.state.buffer
          this.props.createProduct(name, imageHash, price, description )
        }}>
          <div className="form-group mr-sm-2">
            <label><h3>Name</h3></label>
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Name"
              required />
          </div>
          <label><h3>Price</h3></label>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="number"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Price"
              required />
          </div>
          <label><h3>Description</h3></label>
          <div className="form-group mr-sm-2">
            <input
              id="productDescription"
              type="text"
              ref={(input) => { this.productDescription = input }}
              className="form-control"
              placeholder="Description"
              required />
          </div>
          <div className="form-group mr-sm-2">
              <label><h3>Choose image  : </h3></label>
               <input type='file' onChange={this.captureFile} />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
        </div>
        <p>&nbsp;</p>
        <h2>All NFT Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col">Description</th>
              <th scope="col">NFT</th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>{product.description}</td>
                  <td>  <img  src={`https://ipfs.infura.io/ipfs/${product.imageHash}`} alt = "image" /></td>
                  <td>
                    { (!product.purchased || (product.owner !== this.state.account ))
                      ? <button
                           class="btn btn-primary"
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
