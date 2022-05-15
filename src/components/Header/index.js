import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import RenderLogo from './Logo';
import UserIcons from './UserIcons';
import RenderSideBarButton from './SideBarButton';

function RenderHeader(props){
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleKeyPress(e){
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch(){
    search === '' ?  navigate('/') : navigate(`/search/${search}`);
  }

  return(
      <Header>
          <RenderSideBarButton/>
          <RenderLogo/>
          <Search>
            <input type='text' placeholder='Digite o gênero para buscar'
              onChange={ e => setSearch (e.target.value ) }
              onKeyDown={ e => handleKeyPress(e)}          />  
            <div onClick={handleSearch}><FaSearch /></div>
          </Search>
          <UserIcons/>
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
  
  @media(max-width: 768px){
    display: flex;
    justify-content:center;

    article{
      display:none;
    }
  }
`;

const Search = styled.article`
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

    @media(max-width: 768px){
    display: flex;
    justify-content:center;

    article{
      display:none;
    }
  }
`