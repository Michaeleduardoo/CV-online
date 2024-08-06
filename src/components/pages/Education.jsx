import {
  SectionTitle,
  IConteiner,
  TitleH2,
  Extra,
  InfoExtra,
  Details,
  Progress,
  TextsmallExtra,
} from "../style/styles";
import { HiAcademicCap } from "react-icons/hi";

function Education() {
  return (
    <>
      <SectionTitle>
        <IConteiner>
          <HiAcademicCap />
        </IConteiner>
        <TitleH2>Educação</TitleH2>
      </SectionTitle>
      <>
        <Extra>
          <InfoExtra>
            Estácio de Sá
            <br />
            <TextsmallExtra>Fev de 2021 · Dez de 2024 </TextsmallExtra>
            <small>Engenharia de Software </small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>

        <Extra>
          <InfoExtra>
            Dev Club
            <br />
            <TextsmallExtra>Jan de 2022 · Jan de 2022 </TextsmallExtra>
            <small>Desenvolvedor Full Stack </small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>
      </>
    </>
  );
}

export default Education;
