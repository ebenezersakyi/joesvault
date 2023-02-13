import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src="https://southwestvaults.com/img/icon/svg/pointer.svg" style={{ height: 100, width: 100 }} />;
      break;
    case "monitor":
      getIcon = <img src="https://southwestvaults.com/img/icon/svg/warehouse.svg" style={{ height: 100, width: 100 }} />;
      break;
    case "browser":
      getIcon = <img src="https://southwestvaults.com/img/icon/svg/route.svg" style={{ height: 100, width: 100 }} />;
      break;
    case "printer":
      getIcon = <img src="https://southwestvaults.com/img/icon/svg/delivery-truck2.svg" style={{ height: 100, width: 100 }} />;
      break;
    default:
      getIcon = <img src="https://southwestvaults.com/img/icon/svg/pointer.svg" style={{ height: 100, width: 100 }} />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;