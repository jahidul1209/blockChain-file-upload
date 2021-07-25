import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Sidebar from './Sidebar'


const AccountSetting = ()=> { 
     const [ProfileName, setProfileName] = useState('')
     const [ProfileEmail, setProfileEmail] = useState('')
     const [ProfileDes, setProfileDes] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(ProfileName)
        console.log(ProfileEmail)
        console.log(ProfileDes)
    }

  
    // console.log(fetchedData)
    return (
        <div >
          <div className = 'row'>
              <div className = 'col-md-3'>
                        <Sidebar/>
              </div>

            <div className="col-md-7 py-4">
                 <div className = 'mt-5 mb-3 CreteClton'>  <h1>Edit Profile</h1> </div>
              <hr></hr>
            <form onSubmit={handleSubmit}>
                      <div className="form-group mr-sm-2 mb-4">
                            <label class="CollectionForm--label" for="name">Name*</label>
                            <input
                               type="text"
                               for="name"
                               onChange={(e) => setProfileName(e.target.value)}
                               className="form-control"
                               placeholder="Name*"
                               required />
                         </div>
                         <div className="form-group mr-sm-2 mb-4">
                            <label class="CollectionForm--label" for="email">Email</label>
                            <input
                               type="email"
                               for="email"
                               onChange={(e) => setProfileEmail(e.target.value)}
                               className="form-control"
                               placeholder="Email*"
                               required />
                         </div>
                         <div className="form-group mr-sm-2  mb-4">
                            <label class="CollectionForm--label" for="description">Bio</label> 
                              <textarea
                                  type="textarea"
                                  for="description"
                                  rows="5"
                                  onChange={(e) => setProfileDes(e.target.value)}
                                  className="form-control"
                                  placeholder="Bio"
                                  required />
                              </div>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
                </form>
            </div>
            </div>       
        </div>
    )
}
export default AccountSetting
