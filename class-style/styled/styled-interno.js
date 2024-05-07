import { styled } from "styled-components/native";

const PageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const PageTitle = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: yellow;
`;

const PageSubTitle = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

export default function App() {
  return (
    <PageContainer>
      <PageTitle>Olá</PageTitle>
      <PageSubTitle>Cu</PageSubTitle>
    </PageContainer>
  );
}
