import axios from "axios";
import styled from "styled-components";
import { useContext, useState } from "react";

import InsertCard from "./InsertCard";
import InsertAddress from "./InsertAddress";
import ProductsReview from "./ProductsReview";
import ProductsContext from "../../contexts/ProductsContext";
import UserContext from "../../contexts/UserContext";

function RenderCheckoutPage(){
  const {userInfo} = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userAddress, setUserAddress] = useState({address: ''});
  const [userCard, setUserCard] = useState({installments: 1});
  const {chosenProducts} = useContext(ProductsContext);

  const storageToken = localStorage.getItem('token_MonsterGames');

  function sendData(){

    console.log(storageToken)
    console.log(userInfo.token)

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

    const promise = axios.post('http://localhost:5000/checkout', {
      products: chosenProducts,
      paymentInfo: userCard,
      sendTo: userAddress
    }, config)

    promise.then(response => console.log(response));

    promise.catch(error => console.log(error));
  }

  return(
      <Page>
        <ProductsReview chosenProducts = {chosenProducts} totalPrice = {totalPrice} setTotalPrice={setTotalPrice}/>
        <InsertAddress userAddress = {userAddress} setUserAddress = {setUserAddress}/>
        <InsertCard userCard={userCard} setUserCard={setUserCard} totalPrice={totalPrice}/>
        <button onClick={sendData}>Confirmar compra!</button>
      </Page>
  )
}

export default RenderCheckoutPage;

const Page = styled.main`
  padding-top: 70px;
  padding-bottom: 30px;
  width: 90%;
  margin: 0 auto;

`