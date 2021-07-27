import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from './Sidebar'
const Axios = require('axios');

class AccountSetting extends Component {

    constructor(props) {
        super(props)
        this.state = {
          loading: true,
        }
      }

        profileSetting = (account, username, email, biography) => {
          Axios.post("http://localhost:3001/users/insert", {
             account : account,
             username : username,
             email : email,
            biography : biography,
            })
            .then(() =>{
               alert("SuccessFully Inserted")
              
            })
            .catch(error => {
                console.log(error.response)
            });
        }

    render() {
        return (
            <div className = 'accountSetting'>
              <div className = 'row'>
              <div className = 'col-md-3'>
                        <Sidebar/>
               </div>
               <div className="col-md-7 py-4">
               <div className = 'mt-4 mb-4 CreteClton'>  <h1>Profile Settings</h1> </div>
                       <hr></hr>     
                 <form onSubmit={(event) => {
                      event.preventDefault()
                        const username = this.username.value
                        const email = this.email.value
                        const biography = this.biography.value
                        const account =  this.props.account
                        //data send to solidity
                      this.profileSetting(account, username, email, biography)
                      }}>
            

                       <div className="form-group mr-sm-2 mb-4 pt-5">
                            <label class="CollectionForm--label" for="name">Username*</label>
                            <input
                               id="username"
                               type="text"
                               for="name"
                               ref={(input) => { this.username = input }}
                               className="form-control"
                               placeholder="User Name"
                               required />
                         </div>
                          <div className="form-group mr-sm-2  mb-4">
                          <label class="CollectionForm--label" for="email">Email</label> 
                          <input
                              id="email"
                              type="email"
                              for="email"
                              ref={(input) => { this.email = input }}
                              className="form-control"
                              placeholder="Email"
                              required />
                          </div>
                            <div className="form-group mr-sm-2  mb-4">
                            <label class="CollectionForm--label" for="biography">Biography</label> 
                            <p>Here 0 of 1000 characters used</p>
                              <textarea
                                  id="biography"
                                  type="textarea"
                                  for="biography"
                                  rows="5"
                                  ref={(input) => { this.biography = input }}
                                  className="form-control"
                                  placeholder="Biography"
                                  required />
                              </div>
                              <Button  type = 'submit'  className = "createBtn"> Submit </Button>
                
                </form>
                </div>
              </div>            
            </div>
        );
    }
}

export default AccountSetting;

