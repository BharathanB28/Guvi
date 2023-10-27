import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'


function Update() {

    const [id, setId] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [checked, setChecked] = useState('')
    const navigate = useNavigate()

    const updateUser = async () =>{
        await axios.put(API_URL + id, {firstName,lastName,checked})
        navigate('/read')
    }
    

    useEffect(() => {
      setId(localStorage.getItem('id'))
      setfirstName(localStorage.getItem('firstName'))
      setlastName(localStorage.getItem('lastName'))
      setChecked(localStorage.getItem('checked'))    
      }, [])
    
  return (
    <Form className='form'>
        <Form.Field>
            <label>First Name</label>
            <input value={firstName} placeholder='Enter first name' onChange={event => setfirstName(event.target.value)}/>
        </Form.Field><br/>
        <Form.Field>
            <label>Last Name</label>
            <input value={lastName} placeholder='Enter last name' onChange={event => setlastName(event.target.value)}/>
        </Form.Field><br/>
        <Form.Field>
            <Checkbox checked={checked} label='Agree the terms and conditions' onChange={()=>setChecked(!checked)}/>
        </Form.Field><br/>
        <Button onClick={updateUser}>Update</Button>

    </Form>
  )
}

export default Update