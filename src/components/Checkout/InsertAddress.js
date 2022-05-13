import { useState } from "react";
import styled from "styled-components";

import {MdKeyboardArrowDown} from 'react-icons/md'


function InsertAddress(props){
  const {userAddress, setUserAddress} = props;
  const [click, setClick] = useState(false);

  function clickToggle(){
    if(click){
      setClick(false);
    }else{
      setClick(true);
    }
  }
  
  console.log(userAddress)

  return (
    <Address>
      <div onClick= {clickToggle}>Endereço <span><MdKeyboardArrowDown/></span></div>

      {
        !click?
        <em></em>
        :
        <Form>
          <Input type='text' placeholder='Endereço' required value={userAddress.address} 
          onChange={e => setUserAddress ({...userAddress, address: e.target.value })} />

          <Input type='number' placeholder='Nº' required value={userAddress.addressNumber} 
          onChange={e => setUserAddress ({...userAddress, addressNumber: e.target.value })} />
          
          <Input type='text' placeholder='Complemento' required value={userAddress.complement} 
          onChange={e => setUserAddress ({...userAddress, complement: e.target.value })} />

          <Input type='text' placeholder='Bairro' required value={userAddress.neighborhood} 
          onChange={e => setUserAddress ({...userAddress, neighborhood: e.target.value })} />

          <Input type='text' maxLength={9} minLength={9} placeholder='CEP' required value={userAddress.zipCode} 
          onChange={e => setUserAddress ({...userAddress, zipCode: e.target.value })} />

          <Input type='text' placeholder='Cidade' required value={userAddress.city} 
          onChange={e => setUserAddress ({...userAddress, city: e.target.value })} />

          <Input type='text' maxLength={2} minLength={2} placeholder='Estado' required value={userAddress.state} 
          onChange={e => setUserAddress ({...userAddress, state: e.target.value })} />
      </Form>
      }
      
    </Address>
  )
}

export default InsertAddress;

const Address = styled.section`
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