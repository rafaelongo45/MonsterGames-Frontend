import React,{ useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components';

function PurchaseDetails(props) {

  const { purchase } = props;
  const [click, setClick] = useState(false);

  function clickToggle () { click ? setClick(false): setClick(true) }

  return (

    <>
      <BasicInfo>
        <Id>Pedido {purchase._id} </Id>
        <Date>{purchase.date}</Date>
        <Price><div>R$ </div> {purchase.totalPrice.toFixed(2).replace('.',',')}</Price>
        <Arrow onClick={clickToggle}><MdKeyboardArrowDown/></Arrow>

        {click && 
          <>
            <Details> Produtos 
              {purchase.products.map((product,index) => { return (
                <Products key={index} >
                  <img src={product.image} alt={product.name} />
                  <div>
                    <strong>{product.name}</strong>
                    <br/>
                    <strong>Qtd.: {product.quantity}</strong>
                    <br/>
                    <strong>R$ {product.price.toFixed(2).replace('.',',')} cada</strong>
                  </div>
                </Products>
              )})}         
            </Details>
            <div>
              <Details> Entrega          
                <Address>
                  <strong>{purchase.sendTo.address}, {purchase.sendTo.addressNumber}</strong>
                  <strong>Bairro: {purchase.sendTo.neighborhood}</strong>
                  <strong>CEP: {purchase.sendTo.zipCode}</strong>
                  <strong>Cidade: {purchase.sendTo.city} - {purchase.sendTo.state}</strong>
                </Address>         
              </Details>
              <Details> Pagamento          
                <Address>
                  <strong>Cartão final: {purchase.paymentInfo.cardNumber}</strong>
                  <strong>
                    Em: {purchase.paymentInfo.installments}x de {purchase.paymentInfo.value.toFixed(2).replace('.',',')}
                  </strong>
                </Address>         
              </Details>
            </div>
          </>
        }
      </BasicInfo>
      
    </>
  );
}

const BasicInfo = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: initial;  
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  background-color: rgb(229,228,226);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

const Id = styled.div`
  width: 320px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Date = styled.div`
  width: 120px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Price = styled.div`
  width: 110px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
`;

const Arrow = styled.div`
  width: 20px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 30px;
  cursor: pointer;
`;

const Products = styled.div`
  width: 300px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  color: var(--header-color);
  
  img {
    width: 100px;
    height: 130px;
    border-radius: 5px;
    margin-right: 5px;
    border: 1px solid #fff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

`;

const Address = styled.div`
  width: 300px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 5px 0;
  color: var(--header-color);
`;

const Details = styled.div`
  font-family: 'Creepster', cursive;
  font-size: 20px;
  color:rgb(128,24,24);
  padding: 10px;
  line-height: 20px;
`;

export default PurchaseDetails;