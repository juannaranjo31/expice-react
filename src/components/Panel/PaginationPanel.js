import styled from "styled-components";

export const PaginationPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.a`
  z-index: 1;
  margin: 20px;
  color: #fff5ec;
  font-size: 40px;

  &:hover {
    color: #2e266f;
    cursor: pointer;
  }
`;
