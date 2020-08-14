import React from "react";
import {
  Container,
  Title,
  SubTitle,
  SearchInput,
  Button,
  Card,
} from "./styles";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state) => state);
  return (
    <Container>
      <Title>Bonna Vita</Title>
      <SearchInput />
      <Button>Criar estoque</Button>
      <Button>Gerar planilha</Button>
      <Card>Teste</Card>
    </Container>
  );
}
