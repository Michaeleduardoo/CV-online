import {
  Conteiner,
  SubConteiner,
  Cashie,
  ThirdConteiner,
  MainConteiner,
  Summary,
  SubMainConteiner,
} from "./components/style/styles";
import BuPrint from "./components/pages/Button";
import Header from "./components/pages/CashieHeader";
import Professional from "./components/pages/Professional";
import History from "./components/pages/History";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";

function App() {
  return (
    <Conteiner>
      <BuPrint />
      <SubConteiner>
        <Cashie>
          <Header />
        </Cashie>
        <ThirdConteiner>
          <MainConteiner>
            <Summary>
              <Professional />
            </Summary>
            <History />
          </MainConteiner>

          <SubMainConteiner>
            <Summary>
              <Skills />
            </Summary>
            <Education />
          </SubMainConteiner>
        </ThirdConteiner>
      </SubConteiner>
    </Conteiner>
  );
}

export default App;
