import Apple from "assets/Apple/Apple";
import Facebook from "assets/Facebook/Facebook";
import Google from "assets/Google/Google";
import { Input } from "components";
import Navbar from "features/ui/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BoxCenter,
  Button,
  Container,
  Divider,
  DividerText,
  Line,
  LoginContainer,
  LogoContainer,
  OptionContainer,
  OptionDivider,
  OptionText,
  Page,
  SVGLogo,
  Title,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {};

  return (
    <>
      <Navbar />
      <Page>
        <Container>
          <Box>
            <BoxCenter>
              <Title>_Login</Title>
              <LoginContainer>
                <Input title='Email' value={email} setValue={setEmail} />
                <Input
                  title='Password'
                  value={password}
                  type='password'
                  setValue={setPassword}
                />
                <Button onClick={() => navigate("/home")}>Login</Button>
                <Divider>
                  <Line />
                  <DividerText>or</DividerText>
                  <Line />
                </Divider>
                <LogoContainer>
                  <Facebook />
                  <Apple />
                  <Google />
                </LogoContainer>
                <OptionContainer>
                  <OptionText onClick={() => navigate("/register")}>
                    Create an account
                  </OptionText>
                  <OptionDivider />
                  <OptionText>Forgot password?</OptionText>
                </OptionContainer>
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

export default Login;
