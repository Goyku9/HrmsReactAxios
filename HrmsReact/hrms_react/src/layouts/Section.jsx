import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from '../pages/User/Employer/EmployerList';
import Position from '../pages/JobAdvert/Position/Position';
import JobHunterList from '../pages/User/JobHunter/JobHunterList';
import JobAdvertList from '../pages/JobAdvert/JobAdvertList';
import StafferList from '../pages/User/Staffer/StafferList';
export default function Section() {
    return (
        <div>
            <Grid>
            <Grid.Row>
              <GridColumn size={13}>
                 <JobHunterList/>
              </GridColumn>
            </Grid.Row>
            
            <Grid.Row>
              <GridColumn size={13}>
                 <EmployerList/>
              </GridColumn>
            </Grid.Row>
            <Grid.Row>
            <GridColumn size={13}>
               <StafferList/>
            </GridColumn>
          </Grid.Row>
            <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>

            <Grid.Row>
              <GridColumn size={13}>
                  <Position/>
              </GridColumn>
            </Grid.Row>
            
            
            
            
            
            </Grid>
        </div>
    )
}
