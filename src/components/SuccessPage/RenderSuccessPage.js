import axios from 'axios';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';

import PurchasedGames from './PurchasedGames';
import UserContext from '../../contexts/UserContext';
import ProductsContext from '../../contexts/ProductsContext';

function RenderSuccessPage(){
  const {userInfo} = useContext(UserContext);

  const [purchaseInfo, setPurchaseInfo] = useState({a:''})

  const location = useLocation();
  const purchaseId = location.state.insertedId
  const storageToken = localStorage.getItem('token_MonsterGames');

  useEffect(() =>{
    if(!storageToken){
      const config = {
        headers:{
          'Authorization': `Bearer ${storageToken}`
        }
      }
      return config
    }    
  
    const config = {
      headers:{
        'Authorization': `Bearer ${userInfo.token}`
      }
    }
  
    const promise = axios.get(`http://localhost:5000/checkout/${purchaseId}`, config)
  
      promise.then(response => {
        setPurchaseInfo(response.data);
      });
  
      promise.catch(error => {
        console.log(error)
        alert(error.response.data)
      });
  
  }, [])

  return (
    <Main>
        {
          !purchaseInfo.products ? 
          <em></em>
          :
          <PurchasedGames purchaseInfo={purchaseInfo}/>
        }
    </Main>
  )
}

export default RenderSuccessPage;

const Main = styled.main`
  width: 80%;
  margin: 0 auto; 
  padding: 70px 0 50px 0;
  position: relative;

`