import React, {useState} from 'react'
import {API_URL} from '../Constants/URL'
import {Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Create() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const postData =async () =>{
       await axios.post(API_URL, {
        firstName,
        lastName,
        email,
        mobileNumber,
        location,        
       })
       navigate('/read')
    }
  return (
    <div className='create'>
        <h2>Create User</h2>
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input value={firstName} placeholder='Enter first name' onChange={event => setfirstName(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input value={lastName} placeholder='Enter last name' onChange={event => setlastName(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input value={email} placeholder='Enter email' onChange={event => setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Mobile Number</label>
            <input value={mobileNumber} placeholder='Enter mobile number' onChange={event => setMobileNumber(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Location</label>
            <input value={location} placeholder='Enter location' onChange={event => setLocation(event.target.value)}/>
        </Form.Field> 
        <Button className='create-button' onClick={postData}>Submit</Button>

    </Form>

    <Link className='link_create' to={"/read"}>User's Information</Link>
    </div>

    
  )
}

export default Create