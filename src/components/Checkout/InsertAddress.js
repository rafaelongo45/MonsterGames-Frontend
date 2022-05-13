import styled from "styled-components";

function InsertAddress(props){
  const {userAddress, setUserAddress} = props;
  
  console.log(userAddress)

  return (
    <Address>
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
    </Address>
  )
}

export default InsertAddress;

const Address = styled.section`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  border: 2px solid white;
  margin-top: 30px;
  padding: 20px 0;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  
  ::placeholder{
    padding-left: 0;
  }
`;