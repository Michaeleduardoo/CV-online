import {
  SectionTitle,
  IConteiner,
  TitleH2,
  ItensEmployment,
  Empyjob,
  TextSpan,
  Textsmall,
  Ul,
} from "../style/styles";
import { HiBriefcase } from "react-icons/hi";

function History() {
  return (
    <>
      <SectionTitle>
        <IConteiner>
          <HiBriefcase />
        </IConteiner>
        <TitleH2>Histórico de emprego</TitleH2>
      </SectionTitle>
      <>
        <ItensEmployment>
          <Empyjob>Desenvolvedor de Sistemas Júnior</Empyjob>
          <TextSpan> @ Reenvie Tecnologia LTDA / Betim - MG</TextSpan>
          <Textsmall>2024 - Trabalho atualmente neste cargo </Textsmall>
          <>
            <Ul>
              <li>
                Projetar, construir ou manter sites usando Sass, Bootstrap,
                React e WordPress.
              </li>

              <li>
                Manter a compreensão das tecnologias atuais da web ou práticas
                de programação por meio de educação continuada, leitura e
                compartilhamento de conhecimento.
              </li>
            </Ul>
          </>
        </ItensEmployment>
      </>

      <>
        <ItensEmployment>
          <Empyjob>Estagiário desenvolvimento web</Empyjob>
          <TextSpan> @ Agência T42 / Betim - MG</TextSpan>
          <Textsmall>Nov de 2022 – Set de 2023 </Textsmall>
          <>
            <Ul>
              <li>
                Desenvolvedor web, sou responsável pelo desenvolvimento de
                sites, blogs, sistemas, completos e lojas virtuais.
              </li>
              <li>
                Desenvolvia temas e Plugins na plataforma, tornando o site mais
                versátil e atraente, e melhorando muito a experiência do
                usuário.
              </li>
            </Ul>
          </>
        </ItensEmployment>
      </>
    </>
  );
}

export default History;
