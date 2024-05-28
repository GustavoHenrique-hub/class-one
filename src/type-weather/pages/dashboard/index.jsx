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
  MiddleContainerCardLine,

  BottomContainer,
  BottomContainerCard,
  BottomContainerCardTitle,
  BottomContainerCardImage,
  BottomContainerTextMax,
  BottomContainerTextMin
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

import StormyCloudIcon from "./images/stormy-cloud-icon.png"
import SunnyIcon from "./images/sunny-icon.png"
import { useState } from "react";
import axios from "axios";



export default function Dashboard() {

  const [stateTemperatura, setStateTemperatura] = useState("");
  const [stateCity, setStateCity] = useState("");
  const [city, setCity] = useState("");
  const [stateTempMax, setStateTempMax] = useState("");
  const [stateTempMin, setStateTempMin] = useState("");

  const [stateChanceOfRain, setStateChanceOfRain] = useState();
  const [stateFeelsLike, setStateFeelsLike] = useState();
  const [stateHumidity, setStateHumidity] = useState();
  const [stateUvIndex, setStateUvIndex] = useState();
  const [stateWindKm, setStateWindKm] = useState();

  const key = "b2213bc688da17e335540298fee4f0b7";
  const detailKey = "f325bd9a5efd4399858165721242405";

  const getClima = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${stateCity}&lang=pt_br&appid=${key}&units=metric&`;
    const weatherDetailsUrl = `http://api.weatherapi.com/v1/forecast.json?key=${detailKey}&q=${stateCity}`

    axios.get(weatherUrl)
      .then((weatherData) => {
        setStateTemperatura(weatherData.data.main.temp)
        setStateTempMax(weatherData.data.main.temp_max)
        setStateTempMin(weatherData.data.main.temp_min)
      })

      axios.get(weatherDetailsUrl)
      .then((detailInfo) => {
        console.log(detailInfo.data.current)

        setStateFeelsLike(detailInfo.data.current.feelslike_c);
        setStateChanceOfRain(detailInfo.data.forecast.
          forecastday[0].day.daily_chance_of_rain);
        setStateHumidity(detailInfo.data.current.humidity);
        setStateUvIndex(detailInfo.data.current.uv);
        setStateWindKm(detailInfo.data.current.wind_kph);
      })

      setStateCity('')
  }


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
            value={stateCity}
            onSubmitEditing={getClima}
            onChangeText={ newText => {
              setStateCity(newText)
              setCity(newText)
            }}
          />
        </TopContainerHeader>

        
        {/* Imagem do Container do Topo*/}
        <TopContainerBackgroundImage source={TopContainerBackground}>
          {/* Header da Imagem do Container do Topo*/}
          <TopContainerHeaderIn>
            <TopContainerTitle>{city}</TopContainerTitle>
            <TopContainerHourText>21:39</TopContainerHourText>
          </TopContainerHeaderIn>
          <TopContainerSubtitle>
            Segunda-feira, 15 de maio de 2023
          </TopContainerSubtitle>

          <TopContainerFooterIn>
            <TopContainerFooterInLeft>
              <TopContainerFooterInTitle>{!Number.isNaN(parseInt(stateTemperatura)) ? `${parseInt(stateTemperatura)}°c` : " - "}</TopContainerFooterInTitle>
              <TopContainerFooterInSubtitle>
              {!Number.isNaN(parseInt(stateTempMax)) && !Number.isNaN(parseInt(stateTempMin)) ? `${parseInt(stateTempMax)}°c / ${parseInt(stateTempMin)}°c` : " - / -"}
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
            <MiddleContainerText>{!Number.isNaN(parseInt(stateFeelsLike)) ? `${parseInt(stateFeelsLike)}°c` : " - "}</MiddleContainerText>
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

      <BottomContainer>

        <BottomContainerCard>
          <BottomContainerCardTitle>Ter</BottomContainerCardTitle>
          <BottomContainerCardImage source={StormyCloudIcon}/>
          <BottomContainerTextMax>32ºc</BottomContainerTextMax>
          <BottomContainerTextMin>26ºc</BottomContainerTextMin>
        </BottomContainerCard>

        <BottomContainerCard>
          <BottomContainerCardTitle>Qua</BottomContainerCardTitle>
          <BottomContainerCardImage source={SunnyIcon}/>
          <BottomContainerTextMax>32ºc</BottomContainerTextMax>
          <BottomContainerTextMin>26ºc</BottomContainerTextMin>
        </BottomContainerCard>

        <BottomContainerCard>
          <BottomContainerCardTitle>Qui</BottomContainerCardTitle>
          <BottomContainerCardImage source={StormyCloudIcon}/>
          <BottomContainerTextMax>32ºc</BottomContainerTextMax>
          <BottomContainerTextMin>26ºc</BottomContainerTextMin>
        </BottomContainerCard>

        <BottomContainerCard>
          <BottomContainerCardTitle>Sex</BottomContainerCardTitle>
          <BottomContainerCardImage source={SunnyIcon}/>
          <BottomContainerTextMax>32ºc</BottomContainerTextMax>
          <BottomContainerTextMin>26ºc</BottomContainerTextMin>
        </BottomContainerCard>

        <BottomContainerCard>
          <BottomContainerCardTitle>Sab</BottomContainerCardTitle>
          <BottomContainerCardImage source={StormyCloudIcon}/>
          <BottomContainerTextMax>32ºc</BottomContainerTextMax>
          <BottomContainerTextMin>26ºc</BottomContainerTextMin>
        </BottomContainerCard>

      </BottomContainer>

      </ScrollScreen>
    </Container>
   

   
  );

 
}  

