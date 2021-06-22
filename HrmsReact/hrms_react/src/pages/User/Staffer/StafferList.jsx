import React, { useEffect, useState } from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react";
import StafferService from '../../../services/StafferService';

export default function StafferList() {

    const [staffers, setStaffers] = useState([]);

    useEffect(() => {

     let stafferService = new StafferService();
     stafferService.getStaffers()
     .then((result) => setStaffers(result.data.data))

    },[]);


    return (
        <div>
        <Table color="pink" key="pink">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            
           
          </Table.Row>
        </Table.Header>
        
       
        <Table.Body>


        {staffers.map((staffer) => {

            <Table.Row key={staffer.id}>
            <Table.HeaderCell>{staffer.firstName}</Table.HeaderCell>
            <Table.HeaderCell>{staffer.lastName}</Table.HeaderCell>
            <Table.HeaderCell>{staffer.email}</Table.HeaderCell>
            
           
          </Table.Row>
        
        
           })}
               
                       
                    
        
               
        
        </Table.Body>
        

       



        </Table>
            
       
        
        </div>
    )
    }