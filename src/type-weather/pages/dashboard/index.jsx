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
  BottomContainerTextMin,
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

import StormyCloudIcon from "./images/stormy-cloud-icon.png";
import SunnyIcon from "./images/sunny-icon.png";
import { useState, useEffect } from "react";
import axios from "axios";

const key = "b2213bc688da17e335540298fee4f0b7";
const detailKey = "f325bd9a5efd4399858165721242405";

const arrayOfdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
export default function Dashboard() {
  const [stateTemperatura, setStateTemperatura] = useState("");
  const [stateCity, setStateCity] = useState("");
  const [stateTempMax, setStateTempMax] = useState("");
  const [stateTempMin, setStateTempMin] = useState("");
  const [stateWeather, setStateWeather] = useState("");

  const [stateTime, setStateTime] = useState("");

  const [stateFeelsLike, setStateFeelsLike] = useState();
  const [stateChanceOfRain, setStateChanceOfRain] = useState();
  const [stateWindKm, setStateWindKm] = useState();
  const [stateHumidity, setStateHumidity] = useState();
  const [stateUvIndex, setStateUvIndex] = useState();
  const [forecastArray, setForecastArray] = useState([]);

  const daysToShow = 5;

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const getClima = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${stateCity}&lang=pt_br&appid=${key}&units=metric&`;
    const weatherDetailsUrl = `http://api.weatherapi.com/v1/forecast.json?key=${detailKey}&q=${stateCity}`;
    const geoDetailUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${stateCity}&lang=pt_br&appid=${key}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${stateCity}&appid=${key}&units=metric`;

    axios
      .get(weatherUrl)
      .then((weatherData) => {
        setStateTemperatura(weatherData.data.main.temp);
        setStateTempMax(weatherData.data.main.temp_max);
        setStateTempMin(weatherData.data.main.temp_min);
        setStateWeather(weatherData.data.weather[0].main);
      })
      .catch((error) => console.error("Error fetching weather data:", error));

    axios
      .get(weatherDetailsUrl)
      .then((detailInfo) => {
        setStateFeelsLike(detailInfo.data.current.feelslike_c);
        setStateChanceOfRain(
          detailInfo.data.forecast.forecastday[0].day.daily_chance_of_rain
        );
        setStateHumidity(detailInfo.data.current.humidity);
        setStateUvIndex(detailInfo.data.current.uv);
        setStateWindKm(detailInfo.data.current.wind_kph);
      })
      .catch((error) => console.error("Error fetching geocode data:", error));

    axios
      .get(geoDetailUrl)
      .then((geoDetailInfo) => {
        setCountry(geoDetailInfo.data[0].country);
        setCity(geoDetailInfo.data[0].name);
      })
      .catch((error) =>
        console.error("Error fetching weather details:", error)
      );

    axios
      .get(forecastUrl)
      .then((forecastData) => {
        const tempArray = [];
        for (let i = 7; i < 40; i += 8) {
          console.log(forecastData.data.list[i].weather[0].main);
          console.log(`https://openweathermap.org/img/wn/${forecastData.data.list[i].weather[0].icon}.png`)
          tempArray.push({
            main: forecastData.data.list[i].weather[0].main,
            icon: `https://openweathermap.org/img/wn/${forecastData.data.list[i].weather[0].icon}.png`,
            temp_max: forecastData.data.list[i].main.temp_max,
            temp_min: forecastData.data.list[i].main.temp_min,
          });
        }
        setForecastArray(tempArray);
      })
      .catch((error) => console.error("Error fetching forecast data:", error));

    setStateCity("");
  };

  let now = new Date();

  let daysWeek = days[now.getDay()];
  let dayOfMonth = now.getDate();
  let monthOfYear = months[now.getMonth()];
  let year = now.getFullYear();
  let currentDate = `${daysWeek}, ${dayOfMonth} de ${monthOfYear} ${year}`;

  const getWeatherForNextDays = (daysToShow) => {
    const todayIndex = now.getUTCDay();
    let nextDays = [];
    for (let i = 0; i < daysToShow; i++) {
      nextDays.push(arrayOfdays[(todayIndex + i) % 7]);
    }
    return nextDays;
  };

  const displayedWeather = getWeatherForNextDays(daysToShow);

  const getTime = () => {
    let timeNow = new Date();
    let hour = timeNow.getHours();
    let minute = timeNow.getMinutes();

    hour = hour % 24;
    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }
    return setStateTime(`${hour}:${minute}`);
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
              onChangeText={(newText) => {
                setStateCity(newText);
                setCity("");
                setCountry("");
                setStateTemperatura("");
                setStateTempMax("");
                setStateTempMin("");
                setStateWeather("");

                setStateFeelsLike("");
                setStateChanceOfRain("");
                setStateWindKm("");
                setStateHumidity("");
                setStateUvIndex("");
              }}
            />
          </TopContainerHeader>

          {/* Imagem do Container do Topo*/}
          <TopContainerBackgroundImage source={TopContainerBackground}>
            {/* Header da Imagem do Container do Topo*/}
            <TopContainerHeaderIn>
              <TopContainerTitle>
                {city && country != null ? `${city}, ${country}` : " "}
              </TopContainerTitle>
              <TopContainerHourText>{stateTime}</TopContainerHourText>
            </TopContainerHeaderIn>
            <TopContainerSubtitle>{currentDate}</TopContainerSubtitle>

            <TopContainerFooterIn>
              <TopContainerFooterInLeft>
                <TopContainerFooterInTitle>
                  {!Number.isNaN(parseInt(stateTemperatura))
                    ? `${parseInt(stateTemperatura)}°c`
                    : " - "}
                </TopContainerFooterInTitle>
                <TopContainerFooterInSubtitle>
                  {!Number.isNaN(parseInt(stateTempMax)) &&
                  !Number.isNaN(parseInt(stateTempMin))
                    ? `${parseInt(stateTempMax)}°c / ${parseInt(
                        stateTempMin
                      )}°c`
                    : " - / -"}
                </TopContainerFooterInSubtitle>
                <TopContainerFooterInText>
                  {stateWeather != null ? `${stateWeather}` : " "}
                </TopContainerFooterInText>
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
              <MiddleContainerText>
                {!Number.isNaN(parseInt(stateFeelsLike))
                  ? `${parseInt(stateFeelsLike)}°c`
                  : " - "}
              </MiddleContainerText>
            </MiddleContainerImage>
          </MiddleContainerCard>

          <MiddleContainerCardLine />

          <MiddleContainerCard>
            <MiddleContainerImage>
              <MiddleContainerRainyCloudImageSize source={RainyCloud} />
              <MiddleContainerText>Probabilidade de chuva</MiddleContainerText>
            </MiddleContainerImage>
            <MiddleContainerImage>
              <MiddleContainerText>
                {!Number.isNaN(parseInt(stateChanceOfRain))
                  ? `${parseInt(stateChanceOfRain)}%`
                  : " - "}
              </MiddleContainerText>
            </MiddleContainerImage>
          </MiddleContainerCard>

          <MiddleContainerCardLine />

          <MiddleContainerCard>
            <MiddleContainerImage>
              <MiddleContainerWindImageSize source={Wind} />
              <MiddleContainerText>Velocidade do vento</MiddleContainerText>
            </MiddleContainerImage>
            <MiddleContainerImage>
              <MiddleContainerText>
                {stateWindKm !== undefined ? `${stateWindKm} km` : " - "}
              </MiddleContainerText>
            </MiddleContainerImage>
          </MiddleContainerCard>

          <MiddleContainerCardLine />

          <MiddleContainerCard>
            <MiddleContainerImage>
              <MiddleContainerUmitImageSize source={Umit} />
              <MiddleContainerText>Umidade do ar</MiddleContainerText>
            </MiddleContainerImage>
            <MiddleContainerImage>
              <MiddleContainerText>
                {stateHumidity !== undefined ? `${stateHumidity}%` : " - "}
              </MiddleContainerText>
            </MiddleContainerImage>
          </MiddleContainerCard>

          <MiddleContainerCardLine />

          <MiddleContainerCard>
            <MiddleContainerImage>
              <MiddleContainerSunImageSize source={Sun} />
              <MiddleContainerText>Índice UV</MiddleContainerText>
            </MiddleContainerImage>
            <MiddleContainerImage>
              <MiddleContainerText>
                {stateUvIndex !== undefined ? `${stateUvIndex}` : " - "}
              </MiddleContainerText>
            </MiddleContainerImage>
          </MiddleContainerCard>
        </MiddleContainer>

        <BottomContainer>
          {displayedWeather.map((dias, index) => {
            return (
              <BottomContainerCard key={index}>
                <BottomContainerCardTitle>{dias}</BottomContainerCardTitle>
                {forecastArray[index] ? (
                  <BottomContainerCardImage
                    src={forecastArray[index].icon}
                    alt="Weather Icon"
                  />
                ) : (
                  <BottomContainerCardImage
                    src={'https://placehold.co/56x56'}
                    style={{opacity: 0.7}}
                    alt="Weather Icon"
                  />
                )}

                <BottomContainerTextMax>
                  {forecastArray[index] &&
                  forecastArray[index].temp_max !== undefined
                    ? `${parseInt(forecastArray[index].temp_max)}°c`
                    : " - "}
                </BottomContainerTextMax>
                <BottomContainerTextMin>
                  {forecastArray[index] &&
                    forecastArray[index].temp_min !== undefined
                      ? ` ${parseInt(forecastArray[index].temp_min)}°c`
                      : " - "}
                </BottomContainerTextMin>
              </BottomContainerCard>
            );
          })}
        </BottomContainer>
      </ScrollScreen>
    </Container>
  );
}
