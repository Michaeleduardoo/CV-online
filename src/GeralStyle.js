import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   @page {
    size: A4;
}


  body {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    background-color: #fff;
    font-weight: 300;
    display: flex;
    justify-content: center;

    @media print {
    width: 210mm !important;
    height: 296mm;
    }
    
  }
`;

export default GlobalStyle;
