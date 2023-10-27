import React, {useState} from 'react'
import {API_URL} from '../Constants/URL'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [checked, setchecked] = useState(false)
    const navigate = useNavigate()

    const postData =async () =>{
       await axios.post(API_URL, {
        firstName,
        lastName,
        checked
       })
       navigate('/read')
    }
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
            <Checkbox checked={checked} label='Agree the terms and conditions' onChange={()=>setchecked(!checked)}/>
        </Form.Field><br/>
        <Button onClick={postData}>Submit</Button>

    </Form>
  )
}

export default Create