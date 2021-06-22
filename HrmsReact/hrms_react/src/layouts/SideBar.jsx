import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

export default function SideBar() {
  return (
   
      
      
      <Sidebar  
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="user circle outline" />
        JobHunter
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="clipboard list" />
        Position
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="user secret" />
        Employer
      </Menu.Item>
 


      </Sidebar>
      
 
       
  );
}
