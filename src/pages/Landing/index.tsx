import Navbar from "features/ui/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BoxCenter,
  Button,
  Container,
  Page,
  SubText,
  SVGLogo,
  Title,
} from "./styles";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Page>
        <Container>
          <Box>
            <BoxCenter>
              <Title>Much 2Do</Title>
              <SubText>Organize your work.</SubText>
              <SubText>Be productive.</SubText>
              <SubText>Step up.</SubText>

              <Button onClick={() => navigate("/login")}>Get Started</Button>
            </BoxCenter>
          </Box>
          <Box>
            <SVGLogo />
          </Box>
        </Container>
      </Page>
    </>
  );
};

export default Landing;
