import React from "react";
import { Button, Menu, Container, Icon } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu pointing secondary>
        <Container>
          <Menu.Item name="warehouse" position="left">
            <Icon name="warehouse" size="large" />
            HRMS
          </Menu.Item>

          <Menu.Item name="Home" />
          <Menu.Item name="JobAdverts" />
          <Menu.Item name="Companies" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button animated="vertical">
                  <Button.Content hidden>Sign In</Button.Content>
                  <Button.Content visible>
                    <Icon name="sign-in" />
                  </Button.Content>
                </Button>
                <Button.Or text=" " />

                <Button animated="vertical">
                  <Button.Content hidden>Sign Up</Button.Content>
                  <Button.Content visible>
                    <Icon name="signup" />
                  </Button.Content>
                </Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
