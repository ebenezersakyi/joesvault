import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % heroData.length);
    }, 5000); // Set the desired interval in milliseconds (e.g., 3000 for 3 seconds)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [heroData.length]);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            We are Southeast Vaults & Storage: Protecting Your Valuables.
          </h1>
          <HeaderP className="font13 semiBold">
            Protect Your Valuables with Southeast Vault & Storage When it comes
            to storing your most valuable possessions, trust is key. At
            Southeast Vault & Storage, we offer a range of secure storage
            solutions, including deposit safe boxes, vaults, and air cargo
            services, to meet your unique needs. Our state-of-the-art facilities
            are equipped with high-security locks, climate control technology,
            fire and flood protection, and 24/7 monitoring, ensuring that your
            items are protected around the clock. Contact us today to learn more
            about how we can help you keep your valuables safe and secure.{" "}
          </HeaderP>
          {/* <BtnWrapper>
            <FullButton to='contact' title="Get Started" />
          </BtnWrapper> */}
          <Link
            activeClass="active"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
          >
            <BtnWrapper>
              <FullButton title="Get Started" />
            </BtnWrapper>
          </Link>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius88"
            src={heroData[index].img}
            alt="office"
            style={{
              zIndex: 9,
              // opacity: index === 0 ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>{heroData[index].text}</em>
              </p>
              {/* <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Ralph Waldo Emerson
              </p> */}
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const heroData = [
  {
    img: "https://www.firefightermovers.com/wp-content/uploads/2018/05/IMG_4476-1-1024x683.jpg",
    text: "Unlock Peace of Mind. Entrust Your Belongings to Southeast Vaults – Where Security Meets Excellence.",
    person: "",
  },
  {
    img: "https://southwestvaults.com/img/home-slider/slider-2.jpg",
    text: "Preserve What Matters Most. Southeast Vaults – Safeguarding Your Precious Possessions with Unparalleled Care",
    person: "",
  },
  {
    img: "https://southwestvaults.com/img/home-slider/slider-1.jpg",
    text: "Embrace Unwavering Security. Southeast Vaults – A Haven for Your Prized Items, Providing Unmatched Peace and Assurance.",
    person: "",
  },
];

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
