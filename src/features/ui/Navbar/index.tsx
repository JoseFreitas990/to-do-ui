import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, NavBar, Section } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <NavBar>
        <Menu>
          <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
          <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navbar;
