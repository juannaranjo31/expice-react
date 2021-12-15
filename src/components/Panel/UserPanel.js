import styled from "styled-components";

export const UserPanel = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 45px;
  height: 42px;
  background-color: #fff5ec;
  font-size: 22px;
  color: #2e266f;
  text-decoration: none;
`;

export const UserPanelState = styled.div`
  border-radius: 100%;
  position: relative;
  bottom: 15px;
  right: 10px;
  width: 15px;
  height: 15px;
  background-color: #31a24c;
`;

export const UserPanelDrop = styled.a`
  text-decoration: none;
  color: #fff5ec;

  &:hover {
    color: #2e266f;
    cursor: pointer;
  }
`;
