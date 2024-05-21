import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderImg,
  HeaderTitle,
  InputContainer,
  InputTitle,
  InputTitleText,
  InputSearch,
  InputTitleCollored,
} from "./styles";

import Background from "../../assets/images/background.png";
import Cloud from "../../assets/images/cloud.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud}></HeaderImg>
        <HeaderTitle style={{ fontFamily: "Nunito-Bold" }}>
          TypeWeather
        </HeaderTitle>
      </HeaderContainer>
      <InputContainer>
        <InputTitle style={{ fontFamily: "Nunito-Regular" }}>
          Boas vindas ao<InputTitleCollored> TypeWeather</InputTitleCollored>
        </InputTitle>
        <InputTitleText>
          Escolha um local para ver a previsão do tempo
        </InputTitleText>
        <InputSearch
          placeholder="Buscar local"
          placeholderTextColor="#7F7F98"
          style={{ fontFamily: "Nunito-Regular" }}
        ></InputSearch>
      </InputContainer>
    </Container>
  );
}
