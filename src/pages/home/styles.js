import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.p`
  font-size: 20px;
`;
export const SubTitle = styled.p``;
export const SearchInput = styled.input``;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  background-color: #ccc;
  border-style: none;
  padding: 10px 10px;
  margin: 5px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: 10em;
  height: 10em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  margin: 5px;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
