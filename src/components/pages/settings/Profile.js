import React from 'react'
import Sidebar from './Sidebar'


function Profile() {
    return (
        <div className = 'profile'>           
            <div className = 'row'>
                    <div className = 'col-md-3'>
                        <Sidebar/>
                    </div>
                    <div className = 'col-md-7 py-4'>
                      <div className = 'mt-5 mb-3 CreteClton'>  <h1>My Profile</h1> </div>
                       <hr></hr> 
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Name:</h4 >  Md.Jahidul Islam Pavel</span>
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Email:</h4>   jahidulku120912@gmail.com</span>
                        <span ><h4 className = 'mt-4' style = {{fontWeight: '400'}}>Bio :</h4>  Do you need a sidebar navigation menu for your next React.js project? Here I came up with a tutorial on how to create a sidebar menu in React js. Yesterday I was working for one of my clients and his design requires me to create a sidebar navigation menu that can also collapse. So let us see how I created that menu.</span>
                    </div>
            </div>


            
        </div>
    )
}

export default Profile
