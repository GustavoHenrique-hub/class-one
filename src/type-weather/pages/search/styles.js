import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: auto;
  gap: 10px;
  margin-top: 48px;
`;

export const HeaderImg = styled.Image`
  width: 36px;
  height: 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: #FAFAFA;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  margin-top: -180px;
`;

export const InputTitle = styled.Text`
  font-size: 20px;
  color: #FAFAFA;
`;

export const InputTitleCollored = styled.Text`
  font-size: 20px;
  color: #8FB2F5;
  font-weight: bold;
`;

export const InputTitleText = styled.Text`
    color: #BFBFD4;
`;

export const InputSearch = styled.TextInput`
  width: 311px;
  height: 56px;
  color: #7F7F98;
  border-radius: 8px;
  background-color: #1E1E29;
  padding: 17px 20px;
  margin-top: 40px;
`;


