import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: #2E266F;

    &:hover {
      color: #FE043C;
      cursor: pointer;
    }
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MenuNav = ({ items = [] }) => {
  return (
    <List>
      {items.map((item) => (
        <a>
          <ListItem>{item}</ListItem>
        </a>
      ))}
    </List>
  );
};
