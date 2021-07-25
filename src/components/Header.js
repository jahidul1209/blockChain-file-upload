import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown ,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


// import Modal from 'react-bootstrap/Modal'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageHash: '',
      buffer: null,
      show:false,
      showMarket:false,
      showRes:false,
    }
  }
   logout = () => {
    // localStorage.removeItem("accessToken");
    window.location.href = '/home';
  };
  showDropdown = (e)=>{
    this.setState({show:true});
  }
  hideDropdown = (e) => {
    this.setState({show:false});
  }

   showDropdownMar = (e)=>{
      this.setState({showMarket:true});
  }
   hideDropdownMar = (e) => {
    this.setState({showMarket:false});
  }
  showDropdownRes = (e)=>{
    this.setState({showRes:true});
  }
  hideDropdownRes = (e) => {
    this.setState({showRes:false});
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
      <Navbar.Brand >
      <Nav.Link >  
      <Link to="/eternity"><img src="https://i.ibb.co/qW0B4XX/rsz-logo.png" width = '80px' height = 'auto' alt="logo-pn" border="0" className = 'logoImage' /><span>Eternity</span></Link>
        </Nav.Link>
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ml-auto ">
             {/* <!-- Actual search box --> */}
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                  </div>  
              {/* <Nav.Link ><Link to="/eternity"  className="nav-item">Home </Link></Nav.Link>       */}
              <NavDropdown 
                     eventKey={3} 
                     menuAlign="left"
                     id="dropdown-menu-align-left"
                     show={this.state.showMarket}
                     className = "NavDropdown"
                     onMouseEnter={this.showDropdownMar} 
                     onMouseLeave={this.hideDropdownMar}
                     title={
                         <span className="nav-item" >Marketplace</span>
                     }
                     >
                     <Nav.Link >  
                       <Link to="/eternity/all-nfts"  className="nav-item"> All NFTs </Link>
                      </Nav.Link>
                     <Nav.Link >  
                       <Link to="/eternity/arts"  className="nav-item"> Arts </Link>
                      </Nav.Link>
                      <Nav.Link >  
                       <Link to="/eternity/music"  className="nav-item"> Music </Link> 
                      </Nav.Link>
                      <Nav.Link >  
                       <Link to="/eternity/trading-card"  className="nav-item"> Trading Card </Link>
                      </Nav.Link>
                      <Nav.Link >  
                       <Link to="/eternity/collectibles"  className="nav-item"> Collectibles </Link> 
                      </Nav.Link>
                      <Nav.Link >  
                       <Link to="/eternity/sports"  className="nav-item"> Sports </Link>
                      </Nav.Link>
                      <Nav.Link >  
                       <Link to="/eternity/utility"  className="nav-item"> Utility </Link> 
                      </Nav.Link>

             </NavDropdown>
             <NavDropdown 
                     eventKey={3} 
                     menuAlign="left"
                     id="dropdown-menu-align-left"
                     show={this.state.showRes}
                     className = "NavDropdown"
                     onMouseEnter={this.showDropdownRes} 
                     onMouseLeave={this.hideDropdownRes}
                     title={
                         <span className="nav-item" >Resources</span>
                     }
                     >
                     <Nav.Link >  
                           <Link to="/eternity/support"  className="nav-item"> Support </Link>
                      </Nav.Link>
                      <Nav.Link >  
                           <Link to="/eternity/partners"  className="nav-item"> Partners </Link>    
                      </Nav.Link>
             </NavDropdown>
                <Nav.Link > <Link to="/eternity/create"  className="nav-itemS" >Create</Link></Nav.Link>  
             </Nav>  
             <Nav className="ml-auto">   
             <NavDropdown 
                                    eventKey={3} 
                                    menuAlign="left"
                                    id="dropdown-menu-align-left"
                                    show={this.state.show}
                                    className = "NavDropdownPro"
                                    onMouseEnter={this.showDropdown} 
                                    onMouseLeave={this.hideDropdown} 
                                    title={
                                        <span className="nav-item-icon nav-item" ><i className="fa fa-user-circle iconsize"></i></span>
                                    }
                                    >
                                    <Nav.Link ><Link to="/eternity/profile"  className="nav-item">My Profile </Link></Nav.Link>
                                    <Nav.Link ><Link to="/eternity/collections"  className="nav-item"> My Collectios </Link></Nav.Link>
                                    <Nav.Link ><Link to="#"  className="nav-item"> My Favorites </Link></Nav.Link>
                                    <Nav.Link ><Link to="/eternity/account-settings"  className="nav-item"> My Account Settings </Link></Nav.Link>
                                    <Nav.Link onClick={() => this.logout()}>
                                    <Nav.Item ><Link to="#"  className="nav-item"> <i className="fa fa-sign-out" style = {{paddingRight: '15px'}}></i>Logout </Link></Nav.Item>
                                    </Nav.Link>
                            </NavDropdown> 
                 {/* <Nav.Link > <Link to="#" > <span className="menu-button" > Connect wallet </span> </Link></Nav.Link>    */}
                 {/* <Nav.Link > <Link to="#" ><span className="nav-item" id="account">{this.props.account}</span></Link></Nav.Link>  */}
                 {/* <Button className="walletMeta"> <i className="fas fa-wallet"></i> </Button> */}
                 <Link to="#"   className="nav-wallet nav-item" data-toggle="modal" data-target="#myModal2" type = 'button'> 
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8jLh_zXCH7nl7_9OTGmQ6gcozuBI6gS9UA&usqp=CAU" alt = "img"/>
                        <p class="text">Wallet</p>
                  </Link>
            </Nav>
 </Navbar.Collapse>
 </Navbar>

{/* 
<!-- Modal --> */}
	<div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

				<div class="modal-header">
        <h4 class="modal-title text-left" >My Wallet</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>

				<div class="modal-body">
          <div className = 'walletAdd'>
              <p> <span className = 'accunt'>Account No :</span> {this.props.account.slice(0, 6)}...{this.props.account.slice(-4) }
              <textarea 
                  ref={(textarea) => this.textArea = textarea}
                  style = {{display:'none'}}
                  value={this.props.account}
                />
              <button onClick={() => this.copyCodeToClipboard()} className = 'copyBtn'>
                        <i class="far fa-copy"></i>
              </button>
              </p>
          </div>
          <hr></hr>
          <div className = 'walletbaln text-center'>
                <p >Total balance</p> 
                <h4>{ parseFloat(this.props.balance).toFixed(3)} ETH</h4>
          </div>
          <Button className = "createBtn mt-4"  style = {{width:'100%'}}>Add Fund</Button>

				</div>

			</div>
		</div>
	</div>
</>
    );
  }
}

export default Header;
