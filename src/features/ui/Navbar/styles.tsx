import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.primary};
  height: ${(props) => props.theme.navHeight};
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin: 0 1.5rem;
  color: ${(props) => props.theme.black};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.black};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
