import styled from "styled-components";

export const TopicContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${(props) => props.theme.fontlg};
  padding: 0.5rem 0;
`;

export const ButtonsContainer = styled.div`
  & > * {
    margin: 0 0.5rem;
  }
`;

export const TopicItemsContainer = styled.div`
  background-color: ${(props) => props.theme.greenSecondary};
  box-shadow: 2px 2px 0 ${(props) => props.theme.secondary};
  padding-bottom: 1rem;
  padding-top: 0.5rem;
`;

export const SubTopicContainer = styled.div`
  padding: 0.3rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  align-self: center;
  background-color: ${(props) => props.theme.primary};
  border: none;
  outline: none;
  height: 2rem;
  width: 85%;
  padding: 0 0.5rem;
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.black};
`;
