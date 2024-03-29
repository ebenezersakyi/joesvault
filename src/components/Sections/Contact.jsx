import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <a href="/">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </a>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt="office"
                    className="radius6"
                  />
                </ContactImgBox>
                <ContactImgBox>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt="office"
                    className="radius6"
                  />
                </ContactImgBox>
              </div>
              {/* <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={''} alt="office" className="radius6" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
