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
      <Container>
        {purchases?.map(purchase => <PurchaseDetails key={purchase._id} purchase={purchase}/>)}
      </Container>
    </Main>
  ); 
}

const Main = styled.main`
  max-width: 700px;
  height: 100%;
  padding-top: 100px;
  margin: 0 auto;
  margin-bottom: 50px;
  /*background-image: url(https://images4.alphacoders.com/741/74174.png);
  background-size: cover;
  background-position: center;*/
`;

const Container = styled.div`
  max-width: 700px;
  height: 100%;
  margin-bottom: 20px;
  color:rgb(128,24,24);
`;

export default RenderHistory;