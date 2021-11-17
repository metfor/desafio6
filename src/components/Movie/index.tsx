import {
  BoxButton,
  BoxDescription,
  BoxEvaluation,
  BoxImg,
  Container,
  ContainerDesc,
  Description,
  Img,
  ImgMovie,
  InfoMovie,
  InfoP,
  Title,
  Trailer,
  Warning,
  WatchNow,
} from "./styled";
import { BsClock } from "react-icons/bs";
export function Movie() {
  return (
    <Container>
      <Warning>ESTÁ DISPONÍVEL AGORA!</Warning>
      <Title>LOKI</Title>
      <BoxDescription>
        <ImgMovie
          className="movie"
          src="/../public/capa.svg"
          alt="movie"
          width="184"
          height="267"
        />
        <ContainerDesc>
          <Description>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
            <br /> retoma seu papel como o Deus do Mal em uma nova série que
            ocorre após <br />
            os eventos de “Vingadores: Endgame”.
          </Description>
          <InfoMovie>
            <BoxImg>
              <Img
                className="clock"
                src="/../public/clock.svg"
                width="25"
                height="25"
              />
              <InfoP>51min</InfoP>
            </BoxImg>
            <BoxEvaluation>
              <Img
                className="star"
                src="/../public/star.svg"
                width="25"
                height="25"
              />
              <Img
                className="star"
                src="/../public/star.svg"
                width="25"
                height="25"
              />
              <Img
                className="star"
                src="/../public/star.svg"
                width="25"
                height="25"
              />
              <Img
                className="star"
                src="/../public/star.svg"
                width="25"
                height="25"
              />
              <Img
                className="Shadow"
                src="/../public/StarShadow.svg"
                width="25"
                height="25"
              />
            </BoxEvaluation>
            <BoxImg>
              <InfoP>2021</InfoP>
            </BoxImg>
          </InfoMovie>
          <BoxButton>
            <WatchNow> ASSISTIR AGORA</WatchNow>
            <Trailer> TRAILER</Trailer>
          </BoxButton>
        </ContainerDesc>
      </BoxDescription>
    </Container>
  );
}
