import Logo from "assets/Logo/Logo";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 5rem;
  background-color: ${(props) => props.theme.secondary};
  float: left;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-top: 1rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const LogoIcon = styled(Logo)`
  height: 100%;
  width: 100%;
  stroke: 3px;
`;

export const Menu = styled.div``;

export const Divider = styled.div``;

export const LogoutContainer = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    fill: ${(props) => props.theme.white};
  }
  &:active {
    transform: scale(1.1);
  }
`;
