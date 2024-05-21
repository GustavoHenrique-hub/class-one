import {
  Container,
  TopContainer,
  TopContainerImage,
  TopContainerInput,
  TopContainerTitle,
  TopContainerSubtitle,
  TopContainerHourText,
  TopContainerBackgroundImage,
  TopContainerHeader,
  TopContainerHeaderIn,
  TopContainerFooterIn,
  TopContainerFooterImage,
  TopContainerFooterTitle,
} from "./styles";

import { useCallback } from "react";

import Cloud from "./images/home.png";
import Background from "../../assets/images/background.png";
import TopContainerBackground from "./images/background-dashboard.png";
import Icon from "./images/icons.png";

import { useFonts } from "expo-font";

export default function Dashboard() {
  let [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("../../assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    //All Content
    <Container source={Background}>
      {/* Container do Topo */}
      <TopContainer>
        {/* Header do Topo */}
        <TopContainerHeader>
          {/* Imagem do Header*/}
          <TopContainerImage source={Cloud} />
          {/* Input do Header*/}
          <TopContainerInput
            placeholder="Buscar local"
            placeholderTextColor="#7F7F98"
          />
        </TopContainerHeader>
        {/* Imagem do Container do Topo*/}
        <TopContainerBackgroundImage source={TopContainerBackground}>
          {/* Header da Imagem do Container do Topo*/}
          <TopContainerHeaderIn>
            <TopContainerTitle style={{ fontFamily: "Nunito-Bold" }}>
              Porto Alegre, RS
            </TopContainerTitle>
            <TopContainerHourText style={{ fontFamily: "Nunito-Regular" }}>
              21:39
            </TopContainerHourText>
          </TopContainerHeaderIn>
          <TopContainerSubtitle>
            Segunda-feira, 15 de maio de 2023
          </TopContainerSubtitle>

          <TopContainerFooterIn>
            <TopContainerFooterTitle style={{ fontFamily: "Nunito-ExtraBold" }}>
              28°c
            </TopContainerFooterTitle>
            <TopContainerFooterImage source={Icon} />
          </TopContainerFooterIn>
        </TopContainerBackgroundImage>
      </TopContainer>
    </Container>
  );
}
