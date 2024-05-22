import {
  ScrollScreen,

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
  TopContainerFooterInLeft,
  TopContainerFooterInRight,
  TopContainerFooterInText,
  TopContainerFooterInTitle,
  TopContainerFooterInSubtitle,

  MiddleContainer,
  MiddleContainerCard,
  MiddleContainerImage,
  MiddleContainerText,
  MiddleContainerTermometerImageSize,
  MiddleContainerRainyCloudImageSize,
  MiddleContainerUmitImageSize,
  MiddleContainerWindImageSize,
  MiddleContainerSunImageSize,
  MiddleContainerCardLine
} from "./styles";

import Background from "../../assets/images/background.png";

import Cloud from "./images/home.png";
import Icon from "./images/icons.png";
import TopContainerBackground from "./images/background-dashboard.png";
import Termometer from "./images/termometer.png";
import RainyCloud from "./images/rainy-cloud.png";
import Wind from "./images/wind.png";
import Umit from "./images/umit.png";
import Sun from "./images/sun.png";

export default function Dashboard() {
  return (

    
    //All Content
    <Container source={Background}>
      <ScrollScreen>
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
              <TopContainerFooterInTitle>28°c</TopContainerFooterInTitle>
              <TopContainerFooterInSubtitle>
                26ºc / 32ºc
              </TopContainerFooterInSubtitle>
              <TopContainerFooterInText>Poucas nuvens</TopContainerFooterInText>
            </TopContainerFooterInLeft>

            <TopContainerFooterInRight>
              <TopContainerFooterImage source={Icon} />
            </TopContainerFooterInRight>
          </TopContainerFooterIn>
        </TopContainerBackgroundImage>
      </TopContainer>

      <MiddleContainer>
        <MiddleContainerCard>
          <MiddleContainerImage>
            <MiddleContainerTermometerImageSize source={Termometer} />
            <MiddleContainerText>Sensação térmica</MiddleContainerText>
          </MiddleContainerImage>
          <MiddleContainerImage>
            <MiddleContainerText>26ºc</MiddleContainerText>
          </MiddleContainerImage>
        </MiddleContainerCard>

        <MiddleContainerCardLine/>

        <MiddleContainerCard>
          <MiddleContainerImage>
            <MiddleContainerRainyCloudImageSize source={RainyCloud} />
            <MiddleContainerText>Probabilidade de chuva</MiddleContainerText>
          </MiddleContainerImage>
          <MiddleContainerImage>
            <MiddleContainerText>0%</MiddleContainerText>
          </MiddleContainerImage>
        </MiddleContainerCard>

        <MiddleContainerCardLine/>

        <MiddleContainerCard>
          <MiddleContainerImage>
            <MiddleContainerWindImageSize source={Wind} />
            <MiddleContainerText>Velocidade do vento</MiddleContainerText>
          </MiddleContainerImage>
          <MiddleContainerImage>
            <MiddleContainerText>8 km/h</MiddleContainerText>
          </MiddleContainerImage>
        </MiddleContainerCard>

        <MiddleContainerCardLine/>

        <MiddleContainerCard>
          <MiddleContainerImage>
            <MiddleContainerUmitImageSize source={Umit} />
            <MiddleContainerText>Umidade do ar</MiddleContainerText>
          </MiddleContainerImage>
          <MiddleContainerImage>
            <MiddleContainerText>40%</MiddleContainerText>
          </MiddleContainerImage>
        </MiddleContainerCard>

        <MiddleContainerCardLine/>

        <MiddleContainerCard>
          <MiddleContainerImage>
            <MiddleContainerSunImageSize source={Sun} />
            <MiddleContainerText>Índice UV</MiddleContainerText>
          </MiddleContainerImage>
          <MiddleContainerImage>
            <MiddleContainerText>5</MiddleContainerText>
          </MiddleContainerImage>
        </MiddleContainerCard>
      </MiddleContainer>
      </ScrollScreen>
    </Container>
   
  );
}
