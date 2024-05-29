import styled from "styled-components/native";

const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 10px;
  margin-top: 48px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: #16161f;
  border-radius: 12px;
`;

const TopContainerHeader = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  gap: 10px;
  margin-top: 12px;
`;

const TopContainerImage = styled.Image`
  width: 56px;
  height: 56px;
`;

const TopContainerInput = styled.TextInput`
  width: 271px;
  height: 56px;
  color: #7f7f98;
  border-radius: 8px;
  background-color: #1e1e29;
  padding: 17px 20px;
  margin-top: auto;
  font-size: 16px;
  font-family: "Nunito-Regular";
`;

const TopContainerBackgroundImage = styled.ImageBackground`
  width: 335px;
  height: 304px;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
`;

const TopContainerHeaderIn = styled.View`
  padding: 15px 15px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const TopContainerTitle = styled.Text`
  color: #fafafa;
  font-size: 16px;
  font-family: "Nunito-Bold";
`;

const TopContainerSubtitle = styled.Text`
  color: #fafafa;
  font-size: 12px;
  padding: 15px;
  margin-top: -20px;
  font-family: "Nunito-Regular";
`;

const TopContainerHourText = styled.Text`
  color: #fafafa;
  font-size: 12px;
  font-family: "Nunito-Bold";
`;

const TopContainerFooterIn = styled.View`
  margin-left: 20px;
  margin-top: 70px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const TopContainerFooterInLeft = styled.View`
  display: flex;
  flex-direction: column;
`;

const TopContainerFooterInTitle = styled.Text`
  color: #fafafa;
  font-size: 48px;
  font-family: "Nunito-ExtraBold";
`;

const TopContainerFooterInSubtitle = styled.Text`
  color: #fafafa;
  font-size: 16px;
  font-family: "Nunito-Bold";
`;

const TopContainerFooterInText = styled.Text`
  color: #fafafa;
  font-size: 12px;
  font-family: "Nunito-Regular";
`;

const TopContainerFooterInRight = styled.View`
  display: flex;
  flex-direction: column;
`;

const TopContainerFooterImage = styled.Image`
  width: 160px;
  height: 160px;
`;

const MiddleContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 10px;
  margin-top: 14px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: #16161f;
  border-radius: 12px;
`;

const MiddleContainerCard = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const MiddleContainerCardLine = styled.View`
  border: 0.4px solid #3b3b54;
  width: 90%;
  opacity: 0.5;
  margin-top: -15px;
  margin-bottom: -15px;
`;

const MiddleContainerImage = styled.View`
  display: flex;
  flex-direction: row;
  padding: 22.19px 20.94px;
  justify-content: space-between;
`;

const MiddleContainerTermometerImageSize = styled.Image`
  width: 11.63px;
  height: 22.12px;
`;

const MiddleContainerRainyCloudImageSize = styled.Image`
  width: 19.1px;
  height: 21.38px;
`;

const MiddleContainerWindImageSize = styled.Image`
  width: 20.63px;
  height: 16.13px;
`;

const MiddleContainerUmitImageSize = styled.Image`
  width: 16.13px;
  height: 20.63px;
`;

const MiddleContainerSunImageSize = styled.Image`
  width: 19.13px;
  height: 19.13px;
`;

const MiddleContainerText = styled.Text`
  color: #fafafa;
  font-size: 14px;
  font-family: "Nunito-Bold";
  padding: 0px 0px 0px 12px;
`;

const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 14px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 20px;
  background-color: #16161f;
  border-radius: 12px;
  padding: 12.4px;
`;

const BottomContainerCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 10px;
  padding: 15px;
`;

const BottomContainerCardTitle = styled.Text`
  color: #fafafa;
  font-size: 14px;
  font-family: "Nunito-Bold";
`; 

const BottomContainerCardImage = styled.Image`
  margin-left: -5px;
  width: 36.9px;
  height: 39px;
`;

const BottomContainerTextMax = styled.Text`
  color: #fafafa;
  font-size: 14px;
  font-family: "Nunito-Bold";
  margin-top: 12px;
`;

const BottomContainerTextMin = styled.Text`
  color: #7F7F98;
  font-size: 14px;
  font-family: "Nunito-Bold";
  margin-top: -13px;
`;


const ScrollScreen = styled.ScrollView``;

export {
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
  TopContainerFooterInTitle,
  TopContainerFooterInLeft,
  TopContainerFooterInRight,
  TopContainerFooterInText,
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
};
