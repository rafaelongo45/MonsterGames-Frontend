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
      <em>Também enviamos algumas informações para o seu e-mail cadastrado</em>

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

  em{
    font-size: 16px;
    right: 6px;
    bottom: 32px;
    color: black;
    margin: 10px;
  }

  @media(max-width: 1000px){
    h2{
      text-align:center;
    }

    em{
      bottom: 35px;
    }
  }
`

const Games = styled.article`
  display: flex;
  flex-wrap:wrap;
  margin-bottom: 40px;
`

const Game = styled.div`
  margin: auto;
  text-align: center;
  height: 400px;

  img{
    width: 200px;
    border-radius: 10px;
    margin-top: 30px;
  }

  h3{
      text-align:center;
      height: 50px;
      font-size: 22px;
      margin: 15px 0;
      font-weight:700;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    span{
      font-size: 16px;
    }

  @media(max-width: 1000px){
    img{
      width: 220px;
    }

    h3{
      text-align:center;
      font-size: 24px;
      margin: 15px 0;
      font-weight:700;
    }

    span{
      font-size: 16px;
    }
  }
`

const Total = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: rgb(178,34,34);
  font-family: 'Creepster', cursive;

  @media(max-width: 1000px){
    p{
      text-align:center;
      font-size: 24px;
    }
  }
`