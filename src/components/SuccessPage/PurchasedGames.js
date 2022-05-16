import styled from "styled-components"

function PurchasedGames({purchaseInfo}){
  return (
    <Overview>
      <h2>Esse é o resumo da sua compra</h2>

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
        <p>Valor pago: {purchaseInfo.paymentInfo.installments}x de R${(purchaseInfo.paymentInfo.value / purchaseInfo.paymentInfo.installments).toFixed(2).replace('.',',')}</p>    
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
  margin: 0 auto;
  margin-top: 15px;
  background:rgb(242,243,244);
  width: 80%;
  height: 650px;
  overflow-y:scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 6px;
    margin-top:10px;
    margin-bottom:10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

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
    margin: 20px;
  }

  @media(max-width: 1000px){
    width: 90%;

    h2{
      text-align:center;
    }

    em{
      bottom: 35px;
      text-align:center;
    }
  }
`

const Games = styled.article`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  margin: 10px 0 40px 0;
`

const Game = styled.div`
  margin: 10px 20px 0 20px;
  text-align: center;
  border: 1px solid rgb(169,169,169);
  border-radius: 10px;
  height: 320px;

  img{
    width: 160px;
    height: 213px;
    border-radius: 10px;
    margin: 10px 10px 0 10px;
  }

  h3{
    text-align:center;
    height:fit-content;
    font-size: 24px;
    font-weight:700;
    margin-bottom: 5px;
    width: 180px;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 60px;
  }

  span{
    font-size: 16px;
    margin-bottom: 5px;
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