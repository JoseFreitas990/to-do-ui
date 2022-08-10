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

export const TaskTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding-top: 0.5rem;
`;

export const State = styled.h2`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const TaskTitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 500;
`;

export const TaskDescription = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fontmd};
`;
