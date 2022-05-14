import styled from "styled-components";
import { useNavigate } from 'react-router';

import { IoLogOutOutline, IoPersonCircleOutline, IoPeopleOutline, IoCloseCircleOutline } from 'react-icons/io5';

function RenderNavbar({setOpen}){
  const navigate = useNavigate();
  
  function logOut(){
    navigate('/');
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Navbar>
      <em></em>
      <ul>
        <li onClick={() => navigate('/myProfile')}>
          <IconUserPage>
            <IoPersonCircleOutline/>
          </IconUserPage>
          Meu perfil
        </li>

        <li onClick={logOut}>
          <IconLogout>
            <IoLogOutOutline/>
          </IconLogout>
          Logout
        </li>

        <li onClick={() => navigate('/aboutUs')}>
          <IconUs >
            <IoPeopleOutline/>
          </IconUs>
          Sobre nós
        </li>

        <li onClick={() => setOpen(false)}>
          <IconClose>
            <IoCloseCircleOutline/>
          </IconClose>

          Fechar
        </li>
      </ul>
    </Navbar>
  )
}

export default RenderNavbar;

const Navbar = styled.article`
  min-width: 180px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: rgb(40,43,44);
  position:absolute;
  top: 65px;
  transform: translateX(-35%);
  border-radius: 8px;
  color: rgb(220,220,220);

  em{
    width: 18px;
    height: 18px;
    color: black;
    z-index: -1;
    position: absolute;
    border: 1px solid rgb(40,43,44);
    border-radius: 1px;
    transform: rotate(45deg) translateX(-10%);
    top: -6px;
    left: 46%;
    background: rgb(40,43,44);
  }

  li{
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 10px;
    height: 50px;
    border-radius: 6px;
    background: rgb(53,56,57);
    transition: background 300ms;
    cursor:pointer;
  }

  li:last-child{
    color: rgb(255,105,97);
    font-size: 15px;
    margin-bottom: 15px;
  }

  li:hover{
    background:rgb(128,128,128);
  }
`

const IconLogout = styled.section`
  margin: 0 5px;
  font-size: 22px;
  background-color: rgb(58, 62, 63);
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;

  svg{
    transform: rotate(180deg);
    margin-right: 4px;
  }
`

const IconUserPage = styled.section`
  margin: 0 5px;
  font-size: 28px;
  background-color: rgb(58, 62, 63);
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`

const IconUs = styled.section`
  margin: 0 5px;
  font-size: 22px;
  background-color: rgb(58, 62, 63);
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`

const IconClose = styled.section`
  margin: 0 10px 0 5px; 
  font-size: 22px;
  background-color: rgb(58, 62, 63);
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display:flex;
  color: rgb(255,105,97);
  align-items:center;
  justify-content:center;
  cursor:pointer;
`