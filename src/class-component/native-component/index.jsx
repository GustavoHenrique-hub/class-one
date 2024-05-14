import * as S from "./styles.js";

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubTitle>{props.description}</S.CardSubTitle>
    </S.CardContainer>
  );
}

export const CreativeComponent = () => {
  return (
    <S.Container>
      <CreativeCard title="Gusta 1" description="Gusta 1"/>
      <CreativeCard title="Gusta 2" description="Gusta 2"/>
      <CreativeCard title="Gusta 3" description="Gusta 3"/>
      <CreativeCard title="Gusta 4" description="Gusta 4"/>
    </S.Container>
  );
};
