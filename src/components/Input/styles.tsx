import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  color: ${(props) => props.theme.white};
  font-weight: 200;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.greenPrimary};
  height: 2.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  text-align: start;
  padding: 0 0.5rem;
`;

export const TextInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontmd};
`;
