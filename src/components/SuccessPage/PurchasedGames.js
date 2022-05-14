import styled from "styled-components"

function PurchasedGames({purchaseInfo}){
  return (
    <Overview>
      <h2>Esse é o resumo da sua compra:</h2>

      <Games>
        {
          purchaseInfo.products.map((product) => {
            return (
                <Game>
                  <img src={product.image} alt={product.name}/>
                  <h3>{product.name}</h3>
                  <span>Quantidade: {product.quantity}</span>
                </Game>
            )
          })
        }
      </Games> 

      <Total>
        <p>Valor pago: {purchaseInfo.paymentInfo.installments}x de R${(purchaseInfo.paymentInfo.value / purchaseInfo.paymentInfo.installments).toFixed(2)}</p>    
      </Total>

    </Overview>
  )
}
  
export default PurchasedGames

const Overview = styled.section`
  display: flex;
  flex-direction:column;
  border-radius: 8px;
  margin-top: 15px;
  background:rgb(242,243,244);

  h2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 30px 0 0 0;
    font-size: 26px;
    color: rgb(178,34,34);
    font-family: 'Creepster', cursive;
  }
`

const Games = styled.article`
  display: flex;
  flex-wrap:wrap;
  margin: 40px 0;

`

const Game = styled.div`
  margin: auto;
  text-align: center;

  img{
    width: 250px;
    border-radius: 10px;
  }
`

const Total = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: rgb(178,34,34);
  font-family: 'Creepster', cursive;
`