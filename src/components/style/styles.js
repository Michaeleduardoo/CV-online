import styled from "styled-components";
import { HiMap, HiMail, HiPhone } from "react-icons/hi";

export const Conteiner = styled.div`
  width: 100%;
  max-width: 210mm;
  height: auto;
  background: #fff;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  margin: 5mm auto;
  overflow: hidden;
  position: relative;
  break-inside: avoid;
  padding: 20px;
  break-inside: avoid;

  @media (max-width: 768px) {
    margin: 0;
    box-shadow: none;
    padding: 10px;
  }

  @media print {
    padding: 20px !important;
    margin: 0mm auto !important;
    page-break-inside: avoid;
  }
`;

export const ButtonPrint = styled.button`
  z-index: 1;
  position: absolute;
  right: 20px;
  top: 20px;
  background: #dcdcdc;
  border-radius: 4px;
  border: none;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  cursor: pointer;

  svg:hover {
    background: none;
  }

  svg:active {
    opacity: 1;
  }

  @media print {
    display: none;
  }

  @media (max-width: 768px) {
    right: 15px;
    top: 15px;
  }
`;

export const ButtonCashie = styled.button`
  :hover {
    background: #322a48;
    color: rgba(255, 255, 255, 0.85);
  }

  :active {
    opacity: 0.6;
  }
`;

export const SubConteiner = styled.div`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 13.0736px;
  font-weight: 400;
  line-height: 1.5;
  min-height: 1090.41px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }

  @media print {
    width: auto !important;
    font-size: 13.0736px !important;
  }
`;

export const Cashie = styled.div`
  margin-bottom: 4em;
  padding: 6em 4em 0;
  font-size: 0.95em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 3em 2em 0;
  }

  @media print {
    width: auto !important;
    padding: 0em 4em 0 !important;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 2.86em;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2em;
  }

  @media print {
    width: auto !important;
    font-size: 2.86em !important;
  }
`;

export const InfoMichael = styled.div`
  margin-bottom: 0.2em;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media print {
    width: auto !important;
  }
`;

export const LabelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 0.63em;
  font-size: 1.14em;
  min-width: 2.19em;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1em;
  }

  @media print {
    width: auto !important;
    font-size: 1.14em !important;
  }
`;

export const TextInfo = styled.span``;

export const Map = styled(HiMap)`
  color: #ffa500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media print {
    font-size: 18px !important;
  }
`;

export const Email = styled(HiMail)`
  color: #ffa500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media print {
    font-size: 18px !important;
  }
`;

export const Phone = styled(HiPhone)`
  color: #ffa500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media print {
    font-size: 18px !important;
  }
`;

export const ThirdConteiner = styled.div`
  overflow: hidden;
  padding: 4em;
  padding-top: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2em;
    padding-top: 0;
  }

  @media print {
    width: auto !important;
    padding: 0em 4em !important;
  }
`;

export const MainConteiner = styled.div`
  float: left;
  width: 70%;
  padding-right: 6em;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }

  @media print {
    width: 70% !important;
    padding-right: 6em !important;
  }
`;

export const Summary = styled.div`
  margin-bottom: 4em;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2em;
  }

  @media print {
    width: auto !important;
    margin-bottom: 4em !important;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.43em;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1em;
  }

  @media print {
    width: auto !important;
    margin-bottom: 1.43em !important;
  }
`;

export const IConteiner = styled.div`
  margin-right: 0.63em;
  font-size: 18px;
  background-color: #ffa500;
  color: #fff;
  border: 0.25em solid #ffdab9;
  border-radius: 50%;
  width: 2.51em;
  height: 2.51em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    width: 2em;
    height: 2em;
  }

  @media print {
    width: 2.51em !important;
    height: 2.51em !important;
  }
`;

export const TitleH2 = styled.h2`
  margin-top: 0;
  font-size: 1.5em;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2em;
  }

  @media print {
    width: auto !important;
    font-size: 1.5em !important;
  }
`;

export const ContinfoProfe = styled.p`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  font-weight: 400;

  @media (max-width: 768px) {
    width: 100%;
    row-gap: 0.5em;
  }

  @media print {
    width: auto !important;
    row-gap: 1em !important;
  }
`;

export const ItensEmployment = styled.div`
  margin-bottom: 4em;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2em;
  }

  @media print {
    width: auto !important;
    margin-bottom: 4em !important;
  }
`;

export const Empyjob = styled.div`
  font-size: 1.14em;
  font-weight: 600;
  line-height: 1.25;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1em;
  }

  @media print {
    width: auto !important;
    font-size: 1.14em !important;
  }
`;

export const TextSpan = styled.span`
  font-weight: 400;
  font-size: 0.9em;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8em;
  }

  @media print {
    width: auto !important;
    font-size: 0.9em !important;
  }
`;

export const Textsmall = styled.div`
  font-size: 2em;
  font-size: 0.8em;
  margin-top: 0.3em;
  margin-bottom: 1em;
  color: #ffa500;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media print {
    width: auto !important;
  }
`;

export const Ul = styled.ul`
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
  }

  @media print {
    width: auto !important;
    padding-left: 20px !important;
  }
`;

export const SubMainConteiner = styled.div`
  float: left;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media print {
    width: 30% !important;
    float: left !important;
  }
`;

export const Extra = styled.div`
  margin-bottom: 2em;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1em;
  }

  @media print {
    width: auto !important;
    margin-bottom: 2em !important;
  }
`;

export const InfoExtra = styled.div`
  background: #ececec;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }

  @media print {
    width: auto !important;
    padding: 10px !important;
  }
`;

export const TextsmallExtra = styled.div`
  font-size: 2em;
  font-size: 0.8em;
  margin-top: 0.3em;
  color: #ffa500;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media print {
    width: auto !important;
  }
`;

export const Details = styled.div`
  margin-top: 0.5em;
  background-color: #d1d9e1;
  width: 100%;
  height: 5px;
  position: relative;
  border-radius: 6px;
`;

export const Progress = styled.div`
  background-color: #ffa500;
  border-radius: 6px;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
}
`;
