import { ButtonPrint, ButtonCashie } from "../../components/style/styles";
import { HiPrinter } from "react-icons/hi";

function Button() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <ButtonCashie>
      <ButtonPrint onClick={handlePrint}>
        <HiPrinter />
        Imprimir
      </ButtonPrint>
    </ButtonCashie>
  );
}

export default Button;
