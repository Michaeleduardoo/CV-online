import {
  SectionTitle,
  IConteiner,
  TitleH2,
  ContinfoProfe,
} from "../../components/style/styles";
import { HiPencilAlt } from "react-icons/hi";

function Professional() {
  return (
    <>
      <SectionTitle>
        <IConteiner>
          <HiPencilAlt />
        </IConteiner>
        <TitleH2>Resumo Profissional</TitleH2>
      </SectionTitle>
      <>
        <ContinfoProfe>
          <p>
            Desenvolvedor de sistemas com mais de 3 anos de experiência, focado
            em criar soluções digitais inovadoras e eficientes. Tenho
            habilidades em front-end e back-end, proporcionando experiências de
            usuário excepcionais.
          </p>
          <p>
            Sou apaixonado por aprendizado contínuo e estou sempre atualizado
            com as últimas tendências tecnológicas. Estou em busca de
            oportunidades desafiadoras onde possa aplicar meu conhecimento e
            contribuir para projetos inovadores.
          </p>
        </ContinfoProfe>
      </>
    </>
  );
}

export default Professional;
