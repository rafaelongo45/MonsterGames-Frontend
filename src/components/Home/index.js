import React,{ useState , useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import dayjs from 'dayjs';
import {FaSearch, FaShoppingCart, FaUserCircle} from 'react-icons/fa';

import Game from './../Game';

function Home (){

  const currentYear = dayjs().format('YYYY');

  const [games, setGames] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:5000/products/'
    const promise = axios.get(URL);
    promise.then((promise) => { setGames([...promise.data]); });
    promise.catch((err)=>{
      alert('Ocorreu um erro - código ' + err.response.status);
      console.log(err);
    });
  },);

  return (
    <>
      <Header>
        <div>
          <span>MonsterGames</span>
          <section>
            <input type='text' maxLength={18} placeholder='Digite o gênero para buscar'/>  
            <div><FaSearch /></div>
          </section>
          <Avatar><FaUserCircle/></Avatar>
          <Cart><FaShoppingCart/></Cart>
          
        </div>
      </Header>

      <Main>

        {games?.map( ({_id,name,image,price}) => 
          <Game key={_id} name={name} image={image} price={price}/>
        )}
      
      </Main>
      
      <Footer> &#127279; MonsterGames {currentYear}</Footer>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--header-color);
  position: fixed;
  z-index: 1;
  div {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span{
    color: #fff;
    font-family: 'Creepster', cursive;
    font-size: 35px;
  }

  input {
    width: 250px;
    height: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  section {
    display: flex;
    flex-direction: row;
    div {
      width: 30px;
      height: 30px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items:center;
      color: var(--header-color);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
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
`;

const Main = styled.main`
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;//space-evenly
    margin-bottom: 30px;
    padding-top: 70px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background-color: var(--header-color);
  color: #c5c5c5;
  font-family: 'Creepster', cursive;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;


export default Home;