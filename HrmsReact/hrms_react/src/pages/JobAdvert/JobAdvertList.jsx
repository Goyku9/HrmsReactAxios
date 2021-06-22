import React, { useState, useEffect } from "react";
import JobAdvertService from "../../services/JobAdvertService";
import { Table, Button, Header, Icon } from "semantic-ui-react";
export default function JobAdvertList() {

  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getJobAdverts().then((result) =>
      setJobAdverts(result.data.data)
    );
  }, []);

  return (
    <div>
      <Table color="pink" key="pink">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Name</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => {
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobPosition.positionName}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.deadline}</Table.Cell>
              <Table.Cell>{jobAdvert.open.toString()}</Table.Cell>
             
            </Table.Row>;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
