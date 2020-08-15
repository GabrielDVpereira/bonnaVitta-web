import React from "react";
import {
  Container,
  Title,
  SubTitle,
  SearchInput,
  Button,
  Card,
  ButtonsContainer,
  CardsContainer,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/products";

export default function Home() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Bonna Vita</Title>
      <SearchInput />
      <ButtonsContainer>
        <Button
          onClick={() => {
            dispatch(addProduct("teste"));
          }}
        >
          Criar estoque
        </Button>
        <Button>Gerar planilha</Button>
      </ButtonsContainer>
      <CardsContainer>
        {products.map((product) => (
          <Card>{product}</Card>
        ))}
      </CardsContainer>
    </Container>
  );
}
