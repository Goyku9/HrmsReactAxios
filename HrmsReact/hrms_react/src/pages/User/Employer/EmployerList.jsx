import React, { useEffect, useState } from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react";
import EmployerService from '../../../services/EmployerService';

export default function EmployerList() {

  const [employers, setEmployers] = useState([]);

  useEffect(() => {

    let employerService = new EmployerService();
    employerService.getEmployers()
    .then((result) => setEmployers(result.data.data))
     
    
  }, [])


    return (
        <div>
        <Table color="pink" key="pink">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>
        
       
        <Table.Body>

        {employers.map((employer) =>{

            <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.website}</Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
            
            </Table.Row>
               
            

        })}
        
        
        </Table.Body>
        

       



        </Table>
        </div>
    )
}
