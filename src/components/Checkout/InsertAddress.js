import styled from "styled-components";

function InsertAddress(props){
  const {userAddress, setUserAddress, totalPrice} = props;
  
  console.log(userAddress)

  return (
    <Address>
      <p>Endereço</p>

      {
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
      <span>Total : R$ {totalPrice.toFixed(2).replace('.',',')}</span>
    </Address>
  )
}

export default InsertAddress;

const Address = styled.div`
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
    color:rgb(0,0,0);
  }

  @media(max-width:1000px){
    p{
      margin-top: 10px;
      top: 75px;
      left: 105px;
      font-size:26px;
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
      margin-top:120px;
    }

    input:nth-child(2){
      width: 25%;
    }

    :nth-child(2)::-webkit-outer-spin-button,
    :nth-child(2)::-webkit-inner-spin-button{
      -webkit-appearance: none;
    }

    input:nth-child(3){
      width: 60%;
    }

    input:nth-child(4){
      width: 60%;
    }

    input:nth-child(5){
      width: 60%;
    }

    input:nth-child(6){
      width: 60%;
    }

    input:nth-child(7){
      width: 30%;
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
    width: 50%;
  }

  :nth-child(2){
    margin-top: 100px;
    width: 10%;
    margin-left: 20px;
  }

  :nth-child(2)::-webkit-outer-spin-button,
  :nth-child(2)::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }

  :nth-child(3){
    width: 50%;
    margin-right: 80px;
  }

  :nth-child(4){
    width: 40%;
  }

  :nth-child(5){
    width: 30%;
    margin-left: 20px;
  }

  :nth-child(6){
    width: 30%;
  }

  :nth-child(7){
    width: 15%;
    margin-left: 20px;
  }
  
  ::placeholder{
    padding-left: 0;
  }
`;