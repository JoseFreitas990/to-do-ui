import styled from "styled-components";

export const TaskContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${(props) => props.theme.fontlg};
  padding: 0.5rem 0;
`;

export const TaskItemsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.greenSecondary};
  box-shadow: 2px 2px 0 ${(props) => props.theme.secondary};
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
`;
