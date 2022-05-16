import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

import ProductsContext from "../../contexts/ProductsContext";

function InsertCard(props){
  const {userCard, setUserCard, totalPrice, userAddress} = props;
  
  const {userInfo} = useContext(UserContext);
  const {chosenProducts, setChosenProducts} = useContext(ProductsContext);

  const navigate = useNavigate();
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

    const promise = axios.post('https://monstergames-projeto14.herokuapp.com/checkout', {
      products: chosenProducts,
      paymentInfo: userCard,
      sendTo: userAddress
    }, config)

    promise.then(response => {
      console.log(response);
      setChosenProducts([])
      navigate('/success', {state: {insertedId: response.data.insertedId}});
    });

    promise.catch(error => {
      console.log(error)
      alert(error.response.data)
    });
  }

  const price = parseFloat(totalPrice / userCard.installments).toFixed(2).replace('.',',');

  return (
    <Card>
        <p>Cartão</p>
      <Form>

        <Input type='text' placeholder='Número do cartão' required value={userCard.cardNumber} 
          onChange={e => setUserCard ({...userCard, cardNumber: e.target.value, value: parseFloat(price) })} />

        <Input type='text' placeholder='Vencimento' required value={userCard.expireDate} 
          onChange={e => setUserCard ({...userCard, expireDate: e.target.value })} />

        <Input type='number' placeholder='CVV' required value={userCard.cvv} 
          onChange={e => setUserCard ({...userCard, cvv: parseInt(e.target.value)})} />

        <Installments value = {userCard.installments} onChange={e => setUserCard ({...userCard, installments: parseInt(e.target.value)})}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
        </Installments>

        <Input type='text' placeholder='Nome completo' required value={userCard.fullName} 
          onChange={e => setUserCard ({...userCard, fullName: e.target.value })} />

        <Input type='text' placeholder='CPF' required value={userCard.cpf} 
          onChange={e => setUserCard ({...userCard, cpf: e.target.value })} />
       
      </Form>

      <Finalize>
        <p>Total : {userCard.installments}x R$ {price}</p>
        <button onClick={sendData}>Confirmar compra!</button>
      </Finalize>
    </Card>
  )
}

export default InsertCard;

const Card = styled.div`
  width: 99.6%;
  height: 100%;
  display:flex;
  position:relative;
  
  p{
    font-family: 'Creepster', cursive;
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 30px;
    color:rgb(171,75,82);
  }
  
 
  div{
    z-index: 1;
    margin-left: 20px;
    font-size: 28px;
    font-family: 'Creepster', cursive;
    color:rgb(128,24,24);
    cursor:pointer;
    display:flex;
    align-items:center;
    position:relative;
  }

  @media(max-width:1000px){
    display:flex;

    p{
      color:black;
      left: 110px;

    }
  }
`

const Form = styled.form`
  width: 100%;
  height:fit-content;
  display: flex;
  flex-wrap:wrap;
  margin-top: 20px;
  margin-left: 20px;

  @media(max-width:1000px){
    flex-direction:column;

    input:nth-child(n){
      margin: 8px 0;
    }

    input:nth-child(1){
      width:93%;
      margin-top:70px;
    }

    input:nth-child(2){
      width: 44%;
    }

    input:nth-child(3){
      width: 25%;
    }

    input:nth-child(4){
      width: 60%;
    }

    input:nth-child(5){
      width: 93%;
    }

    input:nth-child(6){
      width: 60%;
    }
  }
`;

const Input = styled.input`
  width: 90%;
  visibility: visible;
  height: 40px;
  border: 1px solid #fff;
  margin: 0 0 20px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);

  :nth-child(1){
    margin-top: 100px;
    width: 40%;
  }

  :nth-child(2){
    margin-top: 100px;
    width: 12%;
    margin-left: 20px;
    margin-right: 30%;
  }

  :nth-child(3){
    width: 10%;
    margin-right: 30px;
    
  }

  :nth-child(5){
    width: 40%;
    margin-right: 20px;
  }
  
  :nth-child(6){
    width: 23%;
    margin-right: 20px;
  }

  ::placeholder{
    padding-left: 0;
  }
  
  
  ::placeholder{
    padding-left: 0;
  }
`;

const Installments = styled.select`
  width: 40px;
  border:none;
  height: 40px;
  background-color:white;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  margin-right: 70%;

  option{
    text-align: center;
  }

  @media(max-width: 1000px){
    position:absolute;
    top:26.5%;
    left: 67%;
  }
`

const Finalize = styled.section`
  border-top: 1px solid rgb(132,132,130);
  display:flex;
  left: 2.5%;
  width: 95%;
  position:absolute;
  height: 80px;
  bottom: 10px;
  font-family: 'Creepster', cursive;

  p{
    position: absolute;
    left: 0;
    font-size: 24px;
    color:rgba(0,0,0,0.8);
  }

  button{
    height: 45px;
    position:absolute;
    bottom: 13px;
    right: 10px;
    border:none;
    background:none;
    color:rgb(128,24,24);
    font-size: 26px;
    font-family: 'Creepster', cursive;
    cursor:pointer;
  }

  @media(max-width: 1000px){
    height:16%;
    border-top:0;
    display:flex;
    flex-direction:row;
    text-align:center;

    p{
      position:initial;
      border-bottom: 1px solid rgb(132,132,130);
      padding-bottom: 15px;
      width:100%;
      height: 40%;
    }

    button{
      right: 13%;
      bottom: 0; 
    }
  }
`