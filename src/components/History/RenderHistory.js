import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {MdKeyboardArrowDown} from 'react-icons/md'

import UserContext from '../../contexts/UserContext';

function RenderHistory(){

  const { userInfo } = useContext(UserContext);
  const [ purchases, setPurchases ] = useState ([]);

  useEffect(() => {
    const URL = 'http://localhost:5000/checkout';
    const CONFIG = { headers: { 'Authorization': `Bearer ${userInfo.token}` }};
    const promise = axios.get(URL,CONFIG)  ;
    promise.then( response => setPurchases(response.data));
    promise.catch( err => {
      alert('Ocorreu um erro ao carregar seu histórico- código ' + err.response.status);
      console.log(err);
    });
  }, [userInfo] );

  return(
    <Main>
      <Container>
        <BasicInfo>
          <div>Pedido 627ecdf014ef8eae99a48d3a </div>
          <div>13/05/2022</div>
          <div>R$ 1199.98</div>
        </BasicInfo>
      <Details> Produtos <span><MdKeyboardArrowDown/></span> </Details>
      <Details> Entrega <span><MdKeyboardArrowDown/></span> </Details>
      <Details>Dados de pagamento <span><MdKeyboardArrowDown/> </span></Details>
      </Container>
      {console.log(purchases)}
    </Main>
  ); 
}

const Main = styled.main`
  max-width: 700px;
  height: 100%;
  padding-top: 100px;
  margin: 0 auto;
  /*background-image: url(https://images4.alphacoders.com/741/74174.png);
  background-size: cover;
  background-position: center;*/
`;

const Container = styled.div`
  max-width: 700px;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(229,228,226);
  margin-bottom: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color:rgb(128,24,24);
`;

const BasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 18px;

  div{
    margin-top: 5px;
  }
`;

const Details = styled.div`
  max-width: 700px;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-family: 'Creepster', cursive;
  font-size: 18px;
  color:rgb(128,24,24);
  background-color: rgb(242,243,244);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 30px;
    cursor: pointer;
  }
`;

export default RenderHistory;