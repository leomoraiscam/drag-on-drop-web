import React from "react";
import List from "../List";

import { Container } from "./styled";

function Board() {
  return (
    <Container>
      <List />
      <List />
      <List />
    </Container>
  );
}

export default Board;
