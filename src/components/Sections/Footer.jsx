import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="container"
        >
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              {/* <LogoImg /> */}
              <div style={{ flexDirection: "column" }}>
                <h1
                  className="font15 extraBold whiteColor"
                  style={{ marginLeft: "15px" }}
                >
                  Quick Links
                </h1>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    padding: 10,
                  }}
                >
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    INVESTER RELATIONS
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    PRESS & MEDIA
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    CAREER OPENINGS
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    OUR PARTNERS
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    LEGAL NOTICE
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    COOKIE POLICY
                  </a>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    TERMS & CONDITIONS
                  </a>
                </div>
              </div>

              <div
                style={{
                  flexDirection: "column",
                  marginLeft: 50,
                  justifyContent: "start",
                  alignItems: "start",
                  display: "flex",
                }}
              >
                <h1
                  className="font15 extraBold whiteColor"
                  style={{ marginLeft: "15px" }}
                >
                  Contact
                </h1>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    padding: 10,
                  }}
                >
                  <p
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  >
                    Email: southeastvault@hotmail.com
                  </p>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: 3,
                    }}
                  ></a>
                </div>
              </div>
            </Link>
          </InnerWrapper>
        </div>
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              {/* <LogoImg /> */}
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Southeast Vaults
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © 2012-2020 -{" "}
              <span className="purpleColor font13">Southeast vaults</span> All
              Right Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
