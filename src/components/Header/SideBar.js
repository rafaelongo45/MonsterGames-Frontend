import styled from "styled-components";
import { useNavigate } from "react-router";

import {FaUserCircle} from 'react-icons/fa';


function RenderSideBar({setSideBarClick}){
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <span><FaUserCircle /></span>
        <div onClick={() => navigate('/signin')}><p>Login</p></div>
        <div onClick={() => navigate('/about-us')}><p>Sobre nós</p></div>
      </Section>

      <TransparentLayer onClick={() => setSideBarClick(false)}/>
    </>
  )
}

export default RenderSideBar;

const Section = styled.section`
@media(max-width: 768px){
  top:0;
  left: 0;
  z-index:3;
  width: 50%;
  height: 100%;
  display:flex;
  flex-wrap:wrap;
  position: fixed;
  flex-direction:column;
  background-color: var(--background-color);

  span{
    text-align:center;
    background-color:none;
    margin-bottom: 40px;
    color: rgba(255,255,255,1);
    border: none;
    width: 100%;
    margin-top: 40px;
    font-size: 10vw;
  }

  div{
    width: 100%;
    border-top: 1px solid rgb(255,255,255);
    padding-bottom: 20px;
    height: 6%;
    
    p{
      margin-left: 4%;
      font-size: 25px;
      margin-top: 4%;
      color: rgba(255,255,255,1);
    }
  }

  div:last-child{
    border-bottom: 1px solid rgb(255,255,255);
  }

  }
`

const TransparentLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top:0;
  left:0;
  position: fixed;
  z-index: 2;
`