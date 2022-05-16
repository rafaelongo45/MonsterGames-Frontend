import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md'

import RenderProduct from "./RenderProduct";
import ProductsContext from "../../contexts/ProductsContext.js";

function RenderCartPage(){
  const navigate = useNavigate();
  const {chosenProducts} = useContext(ProductsContext)
  const token = localStorage.getItem('token_MonsterGames');
  const [totalPrice, setTotalPrice] = useState(0);
  
  return (
    <Products>
      {
        chosenProducts.length === 0 ?
        <EmptyCart>
          <p>Parece que ainda não há produtos no seu carrinho</p>
        </EmptyCart>
        :
        <>
          <PageTitle>Seu carrinho <em>({chosenProducts.length} {chosenProducts.length === 1 ? "item" : "itens"})</em></PageTitle>
          {
            chosenProducts.map((chosenProduct) => {
              return (
                <RenderProduct image={chosenProduct.image} price = {chosenProduct.price} name = {chosenProduct.name} id = {chosenProduct.productId} quantity = {chosenProduct.quantity} setTotalPrice={setTotalPrice} totalPrice ={totalPrice}/>
              )
            })
          }

          <Bar> </Bar>

          <Total>
            <h1>Total do carrinho</h1>
            <h2>Frete: <p>  R$ 0,00</p></h2>
            <h3>Total: <p> R$ {totalPrice.toFixed(2).replace('.',',')}</p></h3>
          </Total>
          <button onClick={token ? () => navigate('/checkout')  : () => navigate('/signin')}>Checkout <MdKeyboardArrowRight/></button>
        </>
      }
    </Products>
  )
};

export default RenderCartPage;

const Products = styled.section`
  position:relative;
  width: 65%;
  height: 100%;
  margin: 80px auto 80px auto;
  border-radius: 24px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  background-color: rgba(255,255,255, 0.9);
  padding-bottom: 80px;

  article:last-child{
    margin-bottom: 100px;
  }

  button{
    position:absolute;
    font-family: 'Creepster', cursive;
    color: rgb(178,34,34);
    font-size: 28px;
    bottom: 20px;
    right: 25px;
    background:none;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;

    svg{
      color: rgb(128,0,0);
    }
  }

  @media(max-width:1000px){
    display:flex;
    flex-wrap:wrap;
    width:80%;
    align-items:center;
    flex-direction:column;
  }
`

const PageTitle = styled.h1`
  width: 100%;
  font-size: 30px;
  margin: 20px 60px;
  color: rgba(0,0,0,0.7);
  font-family: 'Creepster', cursive;

  em{
    font-size: 15px;
  }

  @media(max-width:1000px){
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    flex-direction:column;
    margin: 20px 0;

    em{
      margin-top: 5px;
      text-align:center;
    }
  }

`

const Bar = styled.div`
  height: 90%;
  width: 1px;
  position: absolute;
  top:20px;
  right: 39%;
  background-color:rgb(229,228,226);

  @media(max-width:1000px){
    display: none;
  }
`

const Total = styled.article`
  position:absolute;
  width: 30%;
  height: 200px;
  top: 40px;
  right: 60px;
  display:flex;
  flex-direction:column;
  align-items:center;

  h1{
    font-family: 'Creepster', cursive;
    width: 100%;
    font-size: 30px;
    margin: 15px 0 0 0;
    color: rgb(178,34,34);
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid rgba(191,193,194,0.5);
  }

  h2{
    font-family: Roboto;
    width: 100%;
    font-size: 18px;
    margin: 10px 0 0 0;
    font-weight:700;
    color: rgb(0,0,0);
    padding: 10px 0 20px 5px;
    border-bottom: 1px solid rgba(191,193,194,0.5);
    position:relative;
    

      p{
      font-weight: 700;
      position:absolute;
      font-family: Roboto;
      font-size: 14px;
      font-weight:700;
      position: absolute;
      top: 13px;
      left: 70px;
      color: rgba(0,0,0,0.9)
      }

  }

  h3{
    font-family: Roboto;
    width: 100%;
    font-size: 18px;
    font-weight:700;
    margin-top: 10px;
    color: rgb(0,0,0);
    padding: 10px 0 10px 5px;
    position:relative;

      p{
      font-weight: 700;
      position:absolute;
      font-family: Roboto;
      font-size: 14px;
      font-weight:700;
      position: absolute;
      top: 13px;
      left: 70px;
      color: rgba(0,0,0,0.9)
      }
  }

  @media(max-width:1000px){
    width: 80%;
    margin: 10px 0;
    display:flex;
    height: fit-content;
    flex-direction: column;
    position: initial;

    h1{
      font-size: 22px;
    }

    h2{
      display:none;

      p{
        display:none;
      }
    }
  } 
`

const EmptyCart = styled.div`
  width: 80%;
  height: calc(100vh - 250px);
  margin: 0 auto;
  position:relative;
  display:flex;
  justify-content:center;

  p{
    font-size: 24px;
    color: rgba(0,0,0,0.7);
    font-family: 'Creepster', cursive;
    position: absolute;
    top: 50%;
    text-align:center;
  }

`