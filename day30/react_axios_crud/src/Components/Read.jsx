import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Table } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Read() {
    const [apiData, setAPIData] = useState([])
    const navigate = useNavigate()

    const updateUser = async ({id,firstName,lastName,email,mobileNumber,location}) => {
        localStorage.setItem('id', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('email', email)
        localStorage.setItem('mobileNumber', mobileNumber)
        localStorage.setItem('location', location)        
        navigate("/update")
    }

    const deleteUser = async (id) =>{
        await axios.delete(API_URL + id)
        callGetAPI()
    }

    const callGetAPI =async () => {
        const responce = await axios.get(API_URL)
        setAPIData(responce.data)
    }

    useEffect(() => {
        callGetAPI()
    }, [])
    
  return (
    <div className='read'>
    <div className='header_read'>
    <h2>User's Information</h2>
    <Link className='link_read' to={"/"}>Create User</Link>
    </div>
    <Table className='table'>
        
        <Table.Header className='table_header'>
            <Table.Row className='table_header_row'>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Mobile Num</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>                
                <Table.HeaderCell>Actions</Table.HeaderCell>                
            </Table.Row>
        </Table.Header>

        <Table.Body className='table_body'>
            {
                apiData.map(data => (
                <Table.Row key={data.id}>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>{data.mobileNumber}</Table.Cell>
                    <Table.Cell>{data.location}</Table.Cell>
                    <Table.Cell>
                        <Button className='update_button' onClick={()=>updateUser(data)}>Update</Button>
                        <Button className='delete-button' onClick={()=>deleteUser(data.id)}>Delete</Button>                        
                    </Table.Cell>
                    
                </Table.Row>
                ))
            }            
        </Table.Body>

    </Table>
    </div>
  )
}

export default Read