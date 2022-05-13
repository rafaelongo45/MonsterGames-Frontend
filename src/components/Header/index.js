import { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';
import {IoPersonCircle} from 'react-icons/io5';

import RenderLogo from './Logo';

import RenderSideBarButton from './SideBarButton';
import UserContext from '../../contexts/UserContext';

function RenderHeader(props){

  const {getSearch} = props;

  const {userInfo} = useContext(UserContext)
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function handleKeyPress(e){
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch(){
    getSearch (search );
    setSearch('');
  }

  return(
      <Header>
          <RenderSideBarButton/>
          <RenderLogo/>
          <article>
            <input type='text' placeholder='Digite o gênero para buscar'
              onChange={ e => setSearch (e.target.value ) }
              onKeyDown={ e => handleKeyPress(e)}          />  
            <div onClick={handleSearch}><FaSearch /></div>
          </article>
          <Profile>
          {
            userInfo.token ? 
            userInfo.avatar? <img src ={userInfo.avatar} alt={userInfo.name}/> : <Avatar><IoPersonCircle/></Avatar>
            :
            <Avatar onClick={() => navigate('/signin')}><IoPersonCircle/></Avatar>
          }
          <Cart onClick={() => navigate('/mycart')}><FaShoppingCart/></Cart>
          </Profile>
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

  img{
    width: 46px;
    height: 45px;
    border-radius: 100%;
    }

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
  display:flex;
  font-size: 55px;
  color: white;
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

const Profile = styled.section`
  width: 125px;;
  display: flex;
  align-items:center;
  justify-content:space-between;

  @media(max-width: 768px){
    display:none;
  }
`