import styled from "styled-components";

export const Page = styled.div`
  height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${(props) => props.theme.primary};
`;

export const Container = styled.div`
  margin-left: 5rem;
  padding-left: 3rem;
  padding-top: 2rem;
`;

export const WelcomeText = styled.h2`
  padding: 0.2rem 0;

  font-weight: 600;
  &:first-of-type {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 100;
  }
`;

export const TopicSection = styled.div`
  margin-top: 1.5rem;
  width: 20rem;
  margin-right: 2.5rem;
`;
