import React from "react";
import { Container, Label } from "./styled";

export default function Card({ data }) {
  return (
    <>
      <Container>
        <header>
          {data.labels.map((label) => (
            <Label key={data.id} color={label} />
          ))}
        </header>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt="" />}
      </Container>
    </>
  );
}
