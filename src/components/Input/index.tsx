import { SetStateAction } from "react";
import { Container, InputContainer, TextInput, Title } from "./styles";

type IInputProps = {
  title: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
};

const Input: React.FC<IInputProps> = ({ title, value, setValue, type }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <TextInput type={type} onChange={(e) => setValue(e.target.value)} />
      </InputContainer>
    </Container>
  );
};

export default Input;
