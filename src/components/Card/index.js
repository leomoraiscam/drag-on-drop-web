import React from "react";

import { Container, Label } from "./styled";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img
        src="https://www.flaticon.com/premium-icon/icons/svg/3000/3000288.svg "
        alt=""
      />
    </Container>
  );
}

export default Card;
