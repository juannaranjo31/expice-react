import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: #2e266f;

    &:hover {
      color: #fe043c;
      cursor: pointer;
    }
  }

  li {
    list-style: none;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const MenuNav = ({ items = [] }) => {
  return (
    <List>
      {items.map((item, index) => (
        <a key={index} href="/#">
          <li>{item}</li>
        </a>
      ))}
    </List>
  );
};
