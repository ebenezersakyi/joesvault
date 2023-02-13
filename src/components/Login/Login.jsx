import React from 'react'
import './Login.css'
import { Link } from "react-scroll";
import FullButton from "../Buttons/FullButton";
import styled from "styled-components";

function Login() {
  return (
    <div className='container__login'>
        <a href="/">Back</a>
        <p>Vault number or Security Code</p>
        <input 
            type="text" 
            className='text__input'
            placeholder='Enter code'
        />

        <div className="login_buttn">
            <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                <BtnWrapper>
                <FullButton title="CHECK VALUABLES" />
                </BtnWrapper>          
            </Link>
        </div>
    </div>
  )
}

export default Login

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;