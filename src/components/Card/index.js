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
        src="https://api.adorable.io/avatars/239/abott@adorable.png"
        alt=""
      />
    </Container>
  );
}

export default Card;
