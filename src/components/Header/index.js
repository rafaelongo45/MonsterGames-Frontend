import styled from 'styled-components';
import { useNavigate } from 'react-router';
import {FaSearch, FaShoppingCart, FaUserCircle} from 'react-icons/fa';

import RenderLogo from './Logo';

import RenderSideBarButton from './SideBarButton';

function RenderHeader(){
  const navigate = useNavigate();

  return(
      <Header>
          <RenderSideBarButton/>
          <RenderLogo/>
          <article>
            <input type='text' maxLength={18} placeholder='Digite o gênero para buscar'/>  
            <div><FaSearch /></div>
          </article>
          <Avatar onClick={() => navigate('/signin')}><FaUserCircle/></Avatar>
          <Cart><FaShoppingCart/></Cart>
      </Header>
  )
}

export default RenderHeader;

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--header-color);
  position: fixed;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  z-index: 1;

  article{
    display:flex;
    align-items:center;
    width: 40%;
    height: 67%;

    input{
      width: 80%;
      padding-left: 10px;
    }

    input::placeholder{
      padding-left:0;
    }

    div{
      width: 14%;
      color: white;
      display:flex;
      align-items:center;
      justify-content:center;
      background-color:rgb(230,32,32);
      height: 100%;
      margin-left: 5px;
      border-radius:6px;
      font-size: 22px;
      cursor: pointer;
    }
  }
  
  @media(max-width: 768px){
    display: flex;
    justify-content:center;

    article{
      display:none;
    }
  }
`;

const Avatar = styled.section`
  width: 46px;
  height: 45px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 42.5px;
  color: var(--header-color);
  cursor: pointer;

  @media(max-width: 768px){
    display:none;
  }
`;

const Cart = styled.section`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 22px;
  color: var(--header-color);
  cursor: pointer;

  svg{
    margin-right: 2px;
  }

  @media(max-width: 768px){
    display:none;
  }
`;