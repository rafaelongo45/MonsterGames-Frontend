import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import {IoPersonCircle} from 'react-icons/io5';
import UserContext from "../../contexts/UserContext.js";


function RenderSideBar({setSideBarClick}){
  const navigate = useNavigate();
  const {userInfo} = useContext(UserContext);

  console.log(userInfo)

  return (
    <>()
    {
      !userInfo.token ? 
      <Section>
        <span><IoPersonCircle /></span>
        <div onClick={() => navigate('/signin')}><p>Login</p></div>
        <div onClick={() => navigate('/about-us')}><p>Sobre nós</p></div>
      </Section>
      :
      <Section>
        <span><img src ={userInfo.avatar}/></span>
        <p>Bem vind(e), {userInfo.name}</p>
        <div onClick={() => navigate('/mycart')}><p>Carrinho</p></div>
        <div onClick={() => navigate('/purchases')}><p>Minhas Compras</p></div>
        <div onClick={() => navigate('/about-us')}><p>Sobre nós</p></div>
      </Section>
    }
      
      <TransparentLayer onClick={() => setSideBarClick(false)}/>
    </>
  )
}

export default RenderSideBar;

const Section = styled.section`
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

  p{
    margin-bottom: 30px;
    text-align:center;
    font-size:24px;
    color:white;
  }

  span{
    text-align:center;
    background-color:none;
    margin-bottom: 20px;
    color: rgba(255,255,255,1);
    border: none;
    width: 100%;
    margin-top: 40px;
    font-size: 90px;
  }

  div{
    width: 100%;
    border-top: 1px solid rgb(255,255,255);
    padding-bottom: 20px;
    height: 6%;
    
    p{
      margin-left: 4%;
      font-size: 20px;
      margin-top: 15px;
      color: rgba(255,255,255,1);
      text-align:initial;
    }
  }

  div:last-child{
    border-bottom: 1px solid rgb(255,255,255);
  }

@media(max-width: 550px){
  img{
    min-width: 100px;
    min-height: 100px;
  }
}

@media(min-width: 550px) and (max-width: 768px){
  img{
    min-width: 170px;
    min-height: 170px;
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