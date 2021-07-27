import React ,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
const Axios = require('axios');


function Profile(props) {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [biography, setBiography] = useState('');

    useEffect(() => {
        Axios.get("http://localhost:3001/users/get").then((response) => {
            for(var i = 0; i < response.data.length; i++){
                    if(props.account === response.data[i].Account ){
                        setUserName(response.data[i].UserName);
                        setEmail(response.data[i].Email);
                        setBiography(response.data[i].Biography);
                    }
            }
          });     
      });

    return (
        <div className = 'profile'>           
            <div className = 'row'>
                    <div className = 'col-md-3'>
                        <Sidebar/>
                    </div>
                    <div className = 'col-md-7 py-4'>
                    <div className = 'mt-4 mb-4 CreteClton'>  <h1>My Profile</h1> </div>
                       <hr></hr> 
                       <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Account:</h4 > {props.account}</span>
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Name:</h4 > {username}</span>
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Email:</h4>   {email}</span>
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Bio :</h4> {biography} </span>
                    </div>
            </div>


            
        </div>
    )
}

export default Profile
