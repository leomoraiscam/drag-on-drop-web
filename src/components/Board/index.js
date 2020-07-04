import React, { useState } from "react";
import { loadLists } from "../../services/api";
import BoardContext from "./context";
import List from "../List";
import { Container } from "./styles";

export default function Board() {
  const data = loadLists();
  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to);
  }

  return (
    <>
      <BoardContext.Provider value={{ lists, move }}>
        <Container>
          {lists.map((list) => (
            <List key={list.title} data={list} />
          ))}
        </Container>
      </BoardContext.Provider>
    </>
  );
}
