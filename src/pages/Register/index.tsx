import { Input } from "components";
import Navbar from "features/ui/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BoxCenter,
  Button,
  Container,
  ForgotContainer,
  ForgotPw,
  LoginContainer,
  Page,
  SVGLogo,
  Title,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <>
      <Navbar />
      <Page>
        <Container>
          <Box>
            <BoxCenter>
              <Title>_Register</Title>
              <LoginContainer>
                <Input title='Email' value={email} setValue={setEmail} />
                <Input title='Name' value={name} setValue={setName} />

                <Input
                  title='Password'
                  value={password}
                  setValue={setPassword}
                  type='password'
                />
                <Input
                  title='Confirm Password'
                  value={confirmPw}
                  setValue={setConfirmPw}
                  type='password'
                />

                <Button onClick={() => navigate("")}>Register</Button>
                <ForgotContainer>
                  <ForgotPw>Forgot Password</ForgotPw>
                </ForgotContainer>
              </LoginContainer>
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

export default Register;
