import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./VaultDetailsPage.css";
import { Link } from "react-scroll";
import TopNavbar from "../../components/Nav/TopNavbar";
import styled from "styled-components";

function VaultDetailsPage() {
  const [details, setDetails] = useState(null);

  const Location = useLocation();

  useEffect(() => {
    console.log(Location.state.details);
    setDetails(Location.state.details[0]);
  }, [Location.state.details]);

  return (
    <>
      <div className="main__container">
        {/* <TopNavbar  /> */}

        {/* <a href="/" className="back__btn">
        Home
      </a> */}
        <a className="back__btn" to="/">
          {/* <LogoIcon /> */}
          <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            <span style={{ color: "#031d40" }}>SOUTH</span>
            {/* SOUTH */}
            <span style={{ color: "#d17a00" }}>EAST</span>{" "}
            <span style={{ color: "black", marginLeft: 5 }}>VAULTS</span>
          </h1>
        </a>
        <li className="semiBold font15 pointer flexCenter tracking__login">
          <a
            href="/tracking"
            className="radius8 lightBg"
            style={{ padding: "10px 15px" }}
          >
            Tracking
          </a>
        </li>
        <div className="details__container">
          <span>
            <i
              style={{
                display: "flex",
                textAlign: "center",
                marginBottom: 20,
                fontFamily: "serif",
                width: "100%",
                padding: 10,
                backgroundColor: "#e3ad6f",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
              }}
            >
              {details && `Welcome ${details.nameOfDepositor.split(" ")[0]} `}
            </i>
          </span>
          <span>
            <b>Reference Number: </b>
            {details && details.referenceNumber}
          </span>
          <span>
            <b>Name Of Depositor: </b>
            {details && details.nameOfDepositor}
          </span>
          <span>
            <b>Address: </b>
            {details && details.address}
          </span>
          <span>
            <b>Next Of Kin: </b>
            {details && details.nextOfKin}
          </span>
          <span>
            <b>Date Of Deposit: </b>
            {details && details.dateOfDeposit}
          </span>
          <span>
            <b>Items Deposited: </b>
            {details && details.itemsDeposited}
          </span>
          <span>
            <b>Weight: </b>
            {details && details.weight}
          </span>
          <span>
            <b>Purpose Of Deposit: </b>
            {details && details.purposeOfDeposit}
          </span>
          <span>
            <b>Charge Per Month: </b>
            {details && details.chargePerMonth}
          </span>
          {/* <span>
          <a
            style={{
              //   display: "flex",
              textAlign: "center",
              marginTop: 15,
              fontFamily: "serif",
              //   width: "70%",
              padding: 10,
              backgroundColor: "#eb9d44",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
            }}
          >
            Home
          </a>
        </span> */}
        </div>
      </div>
      <div className="footer__deet">
        <p>Email: southeastvault@hotmail.com</p>
        <StyleP className="whiteColor font13 footer__text">
          © 2012-2020 -{" "}
          <span className="purpleColor font13">Southeast vaults</span> All Right
          Reserved
        </StyleP>
      </div>
    </>
  );
}

const StyleP = styled.p`
  @media (max-width: 550px) {
    // margin: 10px 0;
    color: black;
  }
`;

export default VaultDetailsPage;
