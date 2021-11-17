import styled from "styled-components";
import image from "next/image";
export const Warning = styled.h1`
  font-family: B612;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: white;
  margin-top: 2.8125rem;
  text-align: center;
`;
export const Title = styled.h1`
  font-family: B612;
  font-weight: 700;
  font-size: 6rem;
  line-height: 7.25rem;
  color: white;
  text-align: center;
`;
export const Description = styled.p`
  font-family: B612;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2rem;
  color: white;
`;
export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 65px 280px;
`;
export const BoxDescription = styled.div`
  display: grid;
  grid-template-columns: 200px 820px;
`;
export const ImgMovie = styled(image)``;
export const ContainerDesc = styled.div`
  margin-left: 73px;
  display: grid;
`;
export const InfoMovie = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;
export const Img = styled(image)``;
export const BoxImg = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoP = styled.p`
  font-family: B612;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: white;
  margin-left: 8px;
`;
export const BoxEvaluation = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 25px 25px 25px;
  grid-column-gap: 15px;
`;
export const WatchNow = styled.button`
  font-weight: 700;
  background: #0072d2;
  border-radius: 3px;
  width: 184px;
  height: 52px;
  color: white;
  font-family: B612;
  border: none;
`;
export const BoxButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
export const Trailer = styled.button`
  font-weight: 700;
  background: #131318;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  width: 184px;
  height: 52px;
  color: white;
  font-family: B612;
  border: 1px solid #ffffff;
`;
