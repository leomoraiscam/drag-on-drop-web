import React from "react";
import { loadLists } from "../../services/api";

import List from "../List";

import { Container } from "./styled";

const list = loadLists();

function Board() {
  return (
    <Container>
      {list.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}

export default Board;
