import * as S from "./styles.js";

function CreativeCard({title, description}) {
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardSubTitle>{description}</S.CardSubTitle>
    </S.CardContainer>
  );
}

export const CreativeComponent = () => {
  return (
    <S.Container>
      <CreativeCard title="Gusta 1" description="Gusta 1"/>
    </S.Container>
  );
};
