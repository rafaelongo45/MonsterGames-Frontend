import styled from "styled-components";
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';

import ProductsContext from '../../contexts/ProductsContext';
import UserContext from '../../contexts/UserContext';
import RenderNavbar from "./Navbar";

function UserIcons() {
  const {userInfo} = useContext(UserContext)
  const {chosenProducts} = useContext(ProductsContext);
  const [open, setOpen] = useState(false)

  const navigate = useNavigate();

  return (
    <Profile>
      {userInfo.token ? (
        userInfo.avatar ? (
          <>
            <section>
              <img src={userInfo.avatar} alt={userInfo.name} onClick={() => setOpen(!open)}/>
              {
                open ? 
                  <RenderNavbar setOpen={setOpen}/>
                :
                  <></>
              }
            </section>
          </>
        ) : (
          <>
            <Avatar onClick={() => setOpen(!open)}> 
              <IoPersonCircle /> 
                {
                  open ? 
                    <RenderNavbar setOpen={setOpen}/>
                  :
                    <></>
                }
              </Avatar>
          </>
        )
      ) : (
        <Avatar onClick={() => navigate("/signin")}>
          <IoPersonCircle />
        </Avatar>
      )}
      <Cart onClick={() => navigate("/mycart")}>
        <FaShoppingCart />
        {chosenProducts.length === 0 ? (
          <em></em>
        ) : (
          <div>{chosenProducts.length}</div>
        )}
      </Cart>
    </Profile>
  );
}

export default UserIcons;

const Profile = styled.section`
  width: 125px;;
  display: flex;
  align-items:center;
  justify-content:space-between;
  position: relative;

  img{
    position: relative;
    top: 4px;
    left: 4px;
    cursor: pointer;
  }

  @media(max-width: 768px){
    display:none;
  }
`

const Avatar = styled.section`
  display:flex;
  font-size: 55px;
  color: white;
  position:relative;
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
  position:relative;

  div{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color:rgb(255,105,100);
    position: absolute;
    top: -6px;
    right: -2px;
    color: white;
    font-size: 13px;
    display: flex;
    align-items:center;
    justify-content:center;
  }

  svg{
    margin-right: 2px;
    
  }

  @media(max-width: 768px){
    display:none;
  }
`;