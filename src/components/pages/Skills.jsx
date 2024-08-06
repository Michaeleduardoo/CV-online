import {
  SectionTitle,
  IConteiner,
  TitleH2,
  Extra,
  InfoExtra,
  Details,
  Progress,
} from "../../components/style/styles";
import { HiTable } from "react-icons/hi";

function Skills() {
  return (
    <>
      <SectionTitle>
        <IConteiner>
          <HiTable />
        </IConteiner>
        <TitleH2>Habilidades</TitleH2>
      </SectionTitle>
      <>
        <Extra>
          <InfoExtra>
            HTML
            <br />
            <small>HTML5 · Remarcação · Pug</small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>

        <Extra>
          <InfoExtra>
            CSS
            <br />
            <small>Stylus · Sass · Bootstrap</small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>

        <Extra>
          <InfoExtra>
            JavaScript
            <br />
            <small>React · React Native · Vue</small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>

        <Extra>
          <InfoExtra>
            Databases
            <br />
            <small>PostgreSQL · MySQL · Redis</small>
            <Details>
              <Progress></Progress>
            </Details>
          </InfoExtra>
        </Extra>
      </>
    </>
  );
}

export default Skills;
