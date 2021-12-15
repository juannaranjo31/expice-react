import React from "react";
import styled from "styled-components";
import { ButtonForm } from "../Form/ButtonForm";
import { Form } from "../Form/Form";
import { InputForm } from "../Form/InputForm";
import { Location } from "../Location/Location";

const Panel = styled.div`
  width: 100%;
  height: 86vh;
  padding-left: 120px;
`;

const Title = styled.h1`
  color: #2e266f;
  font-size: 200px;
  font-weight: bold;
  opacity: 0.05;
`;

const TitlePrincipal = styled.h1`
  width: 757px;
  font-size: 72px;
  margin-top: -90px;
  font-weight: bold;
  color: #2e266f;
  opacity: 1;
`;

export const PanelHero = () => {
  return (
    <Panel>
      <Title>Food</Title>
      <TitlePrincipal>
        {"Discover Restaurant & Delicious Food"}
      </TitlePrincipal>
      <Form>
        <InputForm placeholder="Search Restaurant, Food"></InputForm>
        <ButtonForm>GO</ButtonForm>
      </Form>
      <Location><i className="fas fa-map-marker-alt"></i> Rajshahi</Location>
    </Panel>
  );
};
