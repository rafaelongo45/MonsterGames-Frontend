import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';


import UserContext from '../../contexts/UserContext';
import PurchaseDetails from './PurchaseDetails';

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
      <Title>Meus pedidos</Title>
      {purchases?.map(purchase => <PurchaseDetails key={purchase._id} purchase={purchase}/>)}     
    </Main>
  ); 
}

const Main = styled.main`
  max-width: 700px;
  padding-top: 100px;
  margin: 0 auto;
  margin-bottom: 50px;
  color: var(--header-color);
`;

const Title = styled.div`
  font-family: 'Creepster', cursive;
  font-size: 30px;
  color: #000;
  padding-left: 10px;
  padding-bottom: 20px;
  
`;


export default RenderHistory;