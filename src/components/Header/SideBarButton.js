import {useState} from 'react';
import styled from 'styled-components';
import {VscThreeBars} from 'react-icons/vsc'

import RenderSideBar from './SideBar';

function RenderSideBarButton(){
  const [sideBarClick, setSideBarClick] = useState(false);

  return (
    <SideBarButton>
      <button onClick={() => setSideBarClick(true)}><VscThreeBars /></button>

      {
        sideBarClick === true? 
        <RenderSideBar setSideBarClick = {setSideBarClick}/>
        :
        <h1></h1>
      }
    </SideBarButton>
  )
}

export default RenderSideBarButton;

const SideBarButton = styled.section`

  button{
    display:none;
  }

  @media(max-width: 768px){
    button{
      display:initial;
      border: none;
      background: none;
      position:absolute;
      font-size: 45px;
      top: 10px;
      left: 0;
      z-index:1;
      color: rgba(240, 52, 52, 1);  
    }
  }
 
`