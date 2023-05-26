import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-scroll";
import FullButton from "../Buttons/FullButton";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

function Login() {
  const [vaultNumber, setVaultNumber] = useState("");
  // const [vault numbers, set]

  const navigate = useNavigate();

  const onButtonPressed = () => {
    if (vaultNumber == "") {
      alert("Please enter a Vault number or Security Code");
    } else {
      const matchObj = vaultNumbers.filter((item, index) => {
        return item.securityCode == vaultNumber;
      });
      if (matchObj.flat(1).length > 0) {
        // alert("success");
        navigate("/details", {
          state: {
            details: matchObj.flat(1),
          },
        });
      } else {
        alert("Invalid Vault number or Security Code");
      }
    }
  };
  return (
    <div className="container__login">
      <a href="/">Back</a>
      <p>Vault number or Security Code</p>
      <input
        type="text"
        className="text__input"
        placeholder="Enter code"
        onChange={(value) => {
          setVaultNumber(value.target.value);
        }}
      />

      <div className="login_buttn">
        <Link
          activeClass="active"
          style={{ padding: "10px 15px" }}
          to="services"
          spy={true}
          smooth={true}
          offset={-80}
        >
          <BtnWrapper
            onClick={() => {
              onButtonPressed();
            }}
          >
            <FullButton title="CHECK VALUABLES" />
          </BtnWrapper>
        </Link>
      </div>
    </div>
  );
}

const vaultNumbers = [
  {
    securityCode: "SSCI/T-SA709000-1/077",
    referenceNumber: "SSCI/C-SA70954H-1/651",
    nameOfDepositor: "Yaa Mansa Frimpong",
    address: "Tema - Ghana",
    nextOfKin: "Edem Frimpong",
    dateOfDeposit: "02 / October / 2003",
    itemsDeposited: "Two metallic Trunk Boxes ",
    weight: "102KG",
    purposeOfDeposit: "Safe Keeping",
    chargePerMonth: "$200",
  },
];

export default Login;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
