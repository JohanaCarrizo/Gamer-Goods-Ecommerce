import { styled } from "styled-components";

export const ImageCard = styled.img`
  width: 150px;
  height: 150px;
`;

export const ButtonCard = styled.button`
  color: #AD1D1D;
  font-size: .8em;
  margin: 1em;
  padding: 0.5em 2em;
  border: 1px solid #AD1D1D;
  border-radius: 40px;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;

  &:hover {
    background-color: #a61b1b;
    color: white;
  }
`;
