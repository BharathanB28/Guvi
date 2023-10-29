import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Form, Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'


function Update() {

    const [id, setId] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const updateUser = async () =>{
        await axios.put(API_URL + id, {firstName,lastName,email,mobileNumber,location})
        navigate('/read')
    }
    

    useEffect(() => {
      setId(localStorage.getItem('id'))
      setfirstName(localStorage.getItem('firstName'))
      setlastName(localStorage.getItem('lastName'))
      setEmail(localStorage.getItem('email'))
      setMobileNumber(localStorage.getItem('mobileNumber'))
      setLocation(localStorage.getItem('location'))
      }, [])
    
  return (
    <div className='update'>
        <h2>Update User</h2>
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
            <input value={email} placeholder='Enter your email' onChange={event => setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Mobile Number</label>
            <input value={mobileNumber} placeholder='Enter your number' onChange={event => setMobileNumber(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Location</label>
            <input value={location} placeholder='Enter your location' onChange={event => setLocation(event.target.value)}/>
        </Form.Field>      
        <Button className='update-button' onClick={updateUser}>Update</Button>
    </Form>
    </div>
  )
}

export default Update