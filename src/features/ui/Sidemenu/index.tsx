import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LogoContainer,
  LogoIcon,
  LogoutContainer,
  Menu,
} from "./styles";

const Sidemenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      <Menu></Menu>
      <LogoutContainer>
        <LogoutContainer onClick={() => navigate("")} />
      </LogoutContainer>
    </Container>
  );
};

export default Sidemenu;
