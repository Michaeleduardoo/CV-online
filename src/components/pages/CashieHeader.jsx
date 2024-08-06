import {
  Map,
  Email,
  Phone,
  TitleH1,
  InfoMichael,
  LabelInfo,
  TextInfo,
} from "../../components/style/styles";

function CashieHeader() {
  return (
    <div>
      <TitleH1>Michael Eduardo</TitleH1>

      <InfoMichael>
        <LabelInfo>
          <Phone />
          <TextInfo>+55 31 99449-5245</TextInfo>
        </LabelInfo>
      </InfoMichael>

      <InfoMichael>
        <LabelInfo>
          <Email />
          <TextInfo>michaeledu2018@gmail.com</TextInfo>
        </LabelInfo>
      </InfoMichael>

      <InfoMichael>
        <LabelInfo>
          <Map />
          <TextInfo>Betim - Minas Gerais / 32677-164</TextInfo>
        </LabelInfo>
      </InfoMichael>
    </div>
  );
}

export default CashieHeader;
