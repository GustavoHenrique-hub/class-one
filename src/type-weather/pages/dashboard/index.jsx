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
  TopContainerFooterInLeft,
  TopContainerFooterInRight,
  TopContainerFooterInText,
  TopContainerFooterInTitle,
  TopContainerFooterSubtitle,
} from "./styles";

import Cloud from "./images/home.png";
import Background from "../../assets/images/background.png";
import TopContainerBackground from "./images/background-dashboard.png";
import Icon from "./images/icons.png";

export default function Dashboard() {
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
            <TopContainerTitle>Porto Alegre, RS</TopContainerTitle>
            <TopContainerHourText>21:39</TopContainerHourText>
          </TopContainerHeaderIn>
          <TopContainerSubtitle>
            Segunda-feira, 15 de maio de 2023
          </TopContainerSubtitle>

          <TopContainerFooterIn>
            <TopContainerFooterInLeft>
              <TopContainerFooterTitle>28°c</TopContainerFooterTitle>
              <TopContainerFooterSubtitle>
                26ºc / 32ºc
              </TopContainerFooterSubtitle>
              <TopContainerFooterInText>Poucas nuvens</TopContainerFooterInText>
            </TopContainerFooterInLeft>

            <TopContainerFooterInRight>
              <TopContainerFooterImage source={Icon} />
            </TopContainerFooterInRight>
          </TopContainerFooterIn>
        </TopContainerBackgroundImage>
      </TopContainer>
    </Container>
  );
}
