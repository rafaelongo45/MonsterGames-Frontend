import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import { FiLogOut } from 'react-icons/fi';
import {IoPersonCircle} from 'react-icons/io5';

import UserContext from "../../contexts/UserContext.js";
import ProductsContext from "../../contexts/ProductsContext.js";


function RenderSideBar({setSideBarClick}){
  const navigate = useNavigate();
  const {userInfo} = useContext(UserContext);
  const {chosenProducts} = useContext(ProductsContext);


  function logOut(){
    navigate('/');
    localStorage.clear();
    window.location.reload();
  }

  function logOut(){
    navigate('/');
    localStorage.clear();
    window.location.reload();
  }

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
        {userInfo.avatar?
        <span><img src ={userInfo.avatar}/></span>
        :
        <span><IoPersonCircle /></span>
        }
        <p>Bem vind(e), {userInfo.name} <Logout onClick={logOut}><FiLogOut/></Logout></p>

        <MyCart onClick={() => navigate('/mycart')}>
          <p>Carrinho</p> 
        {
                chosenProducts.length === 0 ? <em></em>
                :
                <span>{chosenProducts.length}</span>
              } 
        </MyCart>

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
    position: relative;
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

const MyCart = styled.div`
  position:relative;

  span{
    margin: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color:rgb(255,105,100);
    position: absolute;
    top: 13px;
    right: 15px;
    color: white;
    font-size: 18px;
    display: flex;
    align-items:center;
    justify-content:center;
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
const Logout = styled.section`
  font-size: 24px;
  background-color:white;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  position:absolute;
  top: -6px;
  right: 10px;

  svg{
    position:absolute;
    color: black;
    left: 8px;
    top: 5px;
  }
`