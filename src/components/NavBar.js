import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import logo from "./fotos/booox_logo.png";
import { Link } from "react-router-dom";

export default () => (
  <Menu stackable>
    <Container>
      <Menu.Item as={Link} to="/" header>
        <Image size="small" src={logo} />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/login" name="login">
          Login
        </Menu.Item>

        <Menu.Item as={Link} to="/signup" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
