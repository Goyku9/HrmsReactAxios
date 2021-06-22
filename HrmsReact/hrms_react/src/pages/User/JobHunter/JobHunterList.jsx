import React, { useEffect, useState } from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobHunterService from '../../../services/JobHunterService';

export default function JobHunterList() {
  
    const [jobHunters, setJobHunters] = useState([]);

    useEffect(() =>{

        let jobHunterService = new JobHunterService();
        jobHunterService.getJobHunters()
        .then((result) => setJobHunters(result.data.data))
    } 
    
    );


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


   {jobHunters.map((jobHunter) => {

    <Table.Row key={jobHunter.id}>
    <Table.HeaderCell>{jobHunter.firstName}</Table.HeaderCell>
    <Table.HeaderCell>{jobHunter.lastName}</Table.HeaderCell>
    <Table.HeaderCell>{jobHunter.email}</Table.HeaderCell>
    
   
  </Table.Row>


   })}
       
               
            

       
        
        </Table.Body>
        

       



        </Table>
           
        </div>
    )
}
