import { useState } from "react";
import styled from "styled-components";

import {MdKeyboardArrowDown} from 'react-icons/md'

function InsertCard(props){
  const {userCard, setUserCard, totalPrice} = props;
  const [click, setClick] = useState(false);

  const price = parseFloat(totalPrice / userCard.installments).toFixed(2);

  function clickToggle(){
    if(click){
      setClick(false);
    }else{
      setClick(true);
    }
  }

  return (
    <Card>
      <div onClick= {clickToggle}>Cartão <span><MdKeyboardArrowDown/></span></div>

{
  !click?
  <em></em>
  :
      <>
      <Form>
        <Input type='text' placeholder='Número do cartão' required value={userCard.cardNumber} 
          onChange={e => setUserCard ({...userCard, cardNumber: e.target.value, value: parseFloat(price) })} />

        <Input type='text' placeholder='Data de vencimento' required value={userCard.expireDate} 
          onChange={e => setUserCard ({...userCard, expireDate: e.target.value })} />

        <Input type='number' placeholder='CVV' required value={userCard.cvv} 
          onChange={e => setUserCard ({...userCard, cvv: parseInt(e.target.value)})} />

        <Input type='text' placeholder='CPF' required value={userCard.cpf} 
          onChange={e => setUserCard ({...userCard, cpf: e.target.value })} />

        <Installments value = {userCard.installments} onChange={e => setUserCard ({...userCard, installments: parseInt(e.target.value)})}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
        </Installments>

      </Form>
      
      <p>Total: {userCard.installments}x R$ {price}</p>
      </>
      }
    </Card>
  )
}

export default InsertCard;

const Card = styled.section`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  border: 2px solid white;
  background-color: rgb(242,243,244);
  margin-top: 30px;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  
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

    span{
      position: absolute;
      top: -5px;
      right: 8px;
      font-size: 35px;
    }
}
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  
  ::placeholder{
    padding-left: 0;
  }
`;

const Installments = styled.select`
  width: 40px;
  border:none;
  height: 40px;
  margin-bottom: 10px;
  background-color:white;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);

  option{
    text-align: center;
  }
`