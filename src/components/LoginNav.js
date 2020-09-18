import React from "react";
import "../App.css";
import {
  Container,
  Image,
  Menu,
  Button,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import logo from "./fotos/booox_logo.png";
import { Link } from "react-router-dom";

const LoginNav = (props) => {
  const data = JSON.parse(atob(sessionStorage.getItem("token").split(".")[1]));

  const logout = (e) => {
    e.preventDefault();
    props.logoutfunction(false);
    sessionStorage.removeItem("token");
  };

  const trigger = (
    <span>
      <Icon name="user" /> Hello, {data.user.name}
    </span>
  );

  const options = [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{data.user.name}</strong>
        </span>
      ),
      disabled: true,
    },
    { key: "profile", text: "Your Profile", as: Link, to: "/userprofile" },
    { key: "books", text: "Your Books" },
    { key: "explore", text: "Explore" },
    { key: "help", text: "Help" },
    { key: "settings", text: "Settings" },
    { key: "sign-out", text: "Sign Out", as: Link, to: { logout } },
  ];

  return (
    <Menu stackable>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image size="small" src={logo} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown trigger={trigger} options={options} />
          </Menu.Item>

          <Menu.Item>
            <Button
              as="a"
              name="logout"
              onClick={(e) => logout(e)}
              style={{ marginLeft: "0.5em" }}
            >
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default LoginNav;

// <div className="navigation">
//   <div className="container">
//     <div className="logo-div">
//       <Link to="/">
//         {" "}
//         <img alt="" src={logo} />
//       </Link>
//     </div>
//     <div>
//       <button className="login" onClick={(e) => logout(e)}>
//         <Link to="/">Logout</Link>
//       </button>
//     </div>
//   </div>
// </div>;
