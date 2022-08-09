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
