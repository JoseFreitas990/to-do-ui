import Logo from "assets/Logo/Logo";
import styled from "styled-components";

export const Page = styled.div`
  height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  background-color: ${(props) => props.theme.primary};
  position: relative;
`;

export const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    &:last-of-type {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  width: 100%;
  color: ${(props) => props.theme.black};
  font-weight: 200;
  align-self: flex-start;
`;

export const LoginContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 20rem;
  height: auto;
  align-self: flex-start;
  padding: 1rem 1rem;

  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: 4px 4px 10px ${(props) => props.theme.black};

  @media (max-width: 64em) {
    width: 17rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-self: flex-start;
  background-color: ${(props) => props.theme.greenSecondary};
  color: ${(props) => props.theme.white};
  width: 100%;
  height: 3.5rem;
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontlg};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  justify-content: center;
  align-items: center;

  margin-top: 1.5rem;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0 2px ${(props) => props.theme.black};
  }

  &:active {
    background-color: rgba(155, 177, 163, 0.8);
    transform: translate(0px, 0px);
    box-shadow: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Line = styled.div`
  width: 2rem;
  height: 2px;
  background-color: ${(props) => props.theme.primary};
`;

export const DividerText = styled.span`
  padding: 0 0.5rem;
  color: ${(props) => props.theme.primary};
`;

export const SVGLogo = styled(Logo)`
  width: 60%;

  @media (max-width: 64em) {
    width: 40%;
  }
`;

export const LogoContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;

  & > * {
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primary};
  flex-direction: column;
`;

export const OptionDivider = styled.div`
  height: 2px;
  width: 60%;
  margin: 0.5rem;
  background-color: ${(props) => props.theme.primary};
`;
export const OptionText = styled.span`
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 200;
  cursor: pointer;

  transition: all 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`;

export const BoxCenter = styled.div``;
