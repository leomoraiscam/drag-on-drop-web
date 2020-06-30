import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styled";
import Card from "../Card";

function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size={24} color="#ffffff" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;
