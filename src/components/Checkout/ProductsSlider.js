import { useState } from "react";
import styled from "styled-components";
import{ FaShoppingBag } from 'react-icons/fa'


import InsertCard from "./InsertCard";
import InsertAddress from "./InsertAddress";


function ProductsSlider(props){
  const {chosenProducts, totalPrice, setTotalPrice} = props;

  const [userCard, setUserCard] = useState({installments: 1});
  const [userAddress, setUserAddress] = useState({address: ''});
  const [check, setCheck] = useState([{click1:true, click2:false, click3:false}])

  function checkClick1(){
    setCheck([{click1:true, click2:false, click3:false}])
    if(check.click1){
      return 'checked'
    }else{
      return ''
    }
  }

  function checkClick2(){
    setCheck([{click1:false, click2:true, click3:false}]);
    if(check.click2){
      return 'checked'
    }else{
      return ''
    }
  }

  function checkClick3(){
    setCheck([{click1:false, click2:false, click3:true}]);
    if(check.click3){
      return 'checked'
    }else{
      return ''
    }
  }

  let total = 0;

  chosenProducts.forEach((product) => {
      total += (product.price * product.quantity)
  })

  setTotalPrice(total)

  return(
    <ReviewContainer>
      <Teste>
        <ul>
          <li>
            <input type="radio" id="slide1" name="slide" defaultChecked onChange={() => {checkClick1(); checkClick2(); checkClick3()}}/>
            <label htmlFor="slide1"></label>
            
            <Products>
              <span>Total : R$ {totalPrice.toFixed(2)}</span>  
              {
                chosenProducts.map((product) => {
                  return (
                    <Product>
                      <img src={product.image} alt={product.name}/>

                      <Info>
                        <h2>{product.name}</h2>
                        <p>Quantidade: {product.quantity}</p>
                        <em>Total: R$ {(product.price * product.quantity).toFixed(2)}</em>
                      </Info>
                    </Product>
                  )
                })
              }
              
            </Products>
          </li>

          <li >
            <input type="radio" id="slide2" name="slide" onChange={() => {checkClick1(); checkClick2(); checkClick3()}}/>
            <label htmlFor="slide2"></label>
            <InsertAddress userAddress = {userAddress} setUserAddress = {setUserAddress} totalPrice={totalPrice}/>
          </li>

          <li>
            <input type="radio" id="slide3" name="slide" onChange={() => {checkClick1(); checkClick2();checkClick3()}}/>
            <label htmlFor="slide3"></label>
            <InsertCard userCard={userCard} setUserCard={setUserCard} totalPrice={totalPrice} userAddress={userAddress}/>
          </li>
        </ul>
      </Teste>
  </ReviewContainer>
  )
}

export default ProductsSlider;

const Teste = styled.article`
  display:block;
  position: relative;

  li{
    list-style:none;
    position:absolute;
    height: 550px;
    width: 100%;

    label{
      background-color:#fff;
      bottom: -60px;
      cursor: pointer;
      height: 30px;
      position: absolute;
      margin-left: 8.5%;
      border-radius: 100%;
      box-shadow: 0 5px rgb(105,105,105);
      width: 30px;
      z-index: 2;
    }    

    label:hover{
      background:rgb(245,245,245);
    }

    label:active{
      background-color: rgb(255,153,153);
      box-shadow: 0 2px #666;
      transform: translateY(4px);
    }
  }

  #slide1, #slide2, #slide3{
    display: none;
  }

  li:nth-child(1) label {
    left: 10%;
  }

  li:nth-child(2) label {
    left: 40%;
  }

  li:nth-child(3) label {
    left: 70%;
  }
  
  div{
    vertical-align:top;
  }

  div {
    opacity: 0;
    visibility: hidden;
  }

  input:checked ~ div {
    opacity: 1;
    visibility: visible;
    z-index: 1;
  }

  @media(max-width: 1000px){

    li:nth-child(1) label {
      left: 0;
    } 

    li:nth-child(2) label {
      left: 33%;
    }

    li:nth-child(3) label {
      left: 67%;
    }
  }
`

const Products = styled.div`
  display:flex;
  flex-wrap: wrap;
  width: 100%;
  height:550px;
  padding-top: 60px;
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

  @media(max-width: 1000px){    
    article:nth-child(2){
      margin-top: 20px;
    }
  }
  
`
const Product = styled.article`
  border: 1px solid rgb(191,193,194);
  border-radius: 12px;
  display: flex;
  height: 180px;
  width: 45%;
  align-items:center;
  justify-content:start;
  position:relative;
  margin: 10px 20px;

  img{
    width: 120px;
    border-radius: 6px;
    height: 160px;
    margin-left: 10px;
  }

  @media(max-width: 1000px){    
    width:90%;
    
  }
`

const Info = styled.aside`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  position:relative;

  h2{
    font-weight: 700;
    margin-left: 25px;
    margin-top: 15px;
    height: fit-content;
  }

  p{
    font-weight: 700;
    text-align:center;
    position:absolute;
    bottom: 65px;
    right: 70px;
  }

  em{
    font-weight: 700;
    text-align:center;
    position:absolute;
    bottom: 25px;
    right: 65px;
  }

  @media(min-width: 1001px) and (max-width: 1300px){
    h2{
      text-align:center;
      width: 100%;
      margin-left: 0;
    }

    p{
      position: initial;
      width: 100%;
    }

    em{
      position: initial;
      width: 100%;
    }
  }

  @media(max-width: 1000px){    
    margin: 0 5px;
    width:100%;
    justify-content:center;
    align-items:center;
    text-align:center;

    h2{
      margin: 0;
      font-size: 18px;
    }

    p{
      position: initial;
      font-size: 14px;
    }

    em{
      position:initial;
      font-size: 14px;
    }
  }
`

const ReviewContainer = styled.article`
  border: 2px solid white;
  background-color: rgb(242,243,244);
  margin-top: 30px;
  border-radius: 10px;
  min-height: 560px;
  height: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  
  div{
    display:flex;
    position:relative;
    
    span{
      color:rgb(128,24,24);
      font-family: 'Creepster', cursive;
      position: absolute;
      top: 28px;
      right: 20px;
      font-size: 28px;
    }
  }

  @media(max-width: 1000px){    
    width: 300px;
    
    div{
      span{
        font-size:24px;
        right:22%;
        margin-top:10px;
      }
    }
  }
`