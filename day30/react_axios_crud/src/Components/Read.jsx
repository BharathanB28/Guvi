import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'

function Read() {
    const [apiData, setAPIData] = useState([])

    const callGetAPI =async () => {
        const responce = await axios.get(API_URL)
        setAPIData(responce.data)
    }

    useEffect(() => {
        callGetAPI()
    }, [])
    
  return (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                apiData.map(data => (
                <Table.Row key={data.id}>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checked ? "true" : "false"}</Table.Cell>
                </Table.Row>
                ))
            }
            
        </Table.Body>
    </Table>
  )
}

export default Read