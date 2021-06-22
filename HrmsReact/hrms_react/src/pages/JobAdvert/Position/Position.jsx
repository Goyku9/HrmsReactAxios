import React,{useState, useEffect} from 'react';
import { Table, Header, Icon } from "semantic-ui-react";
import PositionService from "../../../services/PositionService";

export default function Position() {

   const [positions, setPositions] = useState([]);

   useEffect(() => {
    let positionService = new PositionService();
    positionService.getPositions()
    .then((result)=> setPositions(result.data.data));
   },[]);

    return (
        <div>
        <Table color="pink" key="pink">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {positions.map((position) =>{
              <Table.Row key={position.id}>
              
              <Table.Cell>{position.positionName}</Table.Cell>
              </Table.Row>
            

          })}
        </Table.Body>



        </Table>
          
        </div>
    )
}
