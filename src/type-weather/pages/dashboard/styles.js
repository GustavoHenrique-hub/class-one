import styled from "styled-components/native";

const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
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

const TopContainerFooterTitle = styled.Text`
  color: #fafafa;
  font-size: 48px;
  font-family: "Nunito-ExtraBold";
`;

const TopContainerFooterSubtitle = styled.Text`
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

export {
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
  TopContainerFooterSubtitle,
};
