import styled from "styled-components";

export const InputForm = styled.input`
  width: 222px;
  height: 18px;
  text-align: center;
  border: none;
  background: transparent;

  &::placeholder {
    color: #2e266f;
  }

  &:focus {
    outline: none;
  }
`;
