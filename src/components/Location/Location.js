import styled from "styled-components";

export const Location = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  position: relative;
  width: 280px;
  height: 65px;
  top: 150px;
  right: 120px;
  background-color: #FE043C;
  color: #FFF5EC;
  border-radius: 0px 100px 100px 0px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 90px;

  &:hover {
    background-color: #a50024;
    cursor: pointer;
  }
`;
