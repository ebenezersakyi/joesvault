import React from "react";
import "./TrackPackage.css";
import { Link } from "react-scroll";
import FullButton from "../Buttons/FullButton";
import styled from "styled-components";

function TrackPackage() {
  return (
    <div className="container__login">
      <a href="/">Back</a>
      <h3>Track your package</h3>
      <p>Enter your tracking number</p>
      <input
        type="text"
        className="text__input"
        placeholder="Enter tracking number"
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
          <BtnWrapper>
            <FullButton title="TRACK" />
          </BtnWrapper>
        </Link>
      </div>
    </div>
  );
}

export default TrackPackage;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
