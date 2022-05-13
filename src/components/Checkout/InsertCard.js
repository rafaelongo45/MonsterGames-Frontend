import styled from "styled-components";

function InsertCard(props){
  const {userCard, setUserCard, totalPrice} = props;

  const price = parseFloat(totalPrice / userCard.installments).toFixed(2);

  return (
    <Card>
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
    </Card>
  )
}

export default InsertCard;

const Card = styled.section`
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

const Installments = styled.select`
  width: 320px;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
`