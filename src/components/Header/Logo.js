import { useNavigate } from "react-router";
import styled from "styled-components";

import logoClosedMouth from "../../assets/images/logo1.png"


function RenderLogo(){
  const navigate = useNavigate();

  return (
    <Logo onClick={() => navigate("/")}>
      <img src={logoClosedMouth} alt="logo"></img>
      <p>MonsterGames</p>
    </Logo>
  )
}

export default RenderLogo;

const Logo = styled.div`
  color: #fff;
  font-family: 'Creepster', cursive;
  height:100%;
  display:flex;
  align-items:center;
  cursor:pointer;

  img{
    max-height: 85%;
    margin-right: 10px;
  }

  p{
    font-size: 24px;
  }

  @media(max-width: 768px){
    font-size: 20px;
    width: fit-content;
    display:flex;
    align-items:center;

    img{
      max-height: 85%;
      margin-right: 10px;
    }

    p{
      font-size: 24px;
    }
  }
`