import { useState } from "react";
import styled from "styled-components";

import {MdKeyboardArrowDown} from 'react-icons/md'

function ProductsReview(props){
  const [click, setClick] = useState(false);
  const {chosenProducts, totalPrice, setTotalPrice} = props;

  let total = 0;

  chosenProducts.forEach((product) => {
      total += (product.price * product.quantity)
  })

  function clickToggle(){
    if(click){
      setClick(false);
    }else{
      setClick(true);
    }
  }

  setTotalPrice(total)

  return(

    <ReviewContainer>
        <div onClick= {clickToggle}>Produtos <span><MdKeyboardArrowDown/></span></div>
        {
        !click?
        <em></em>
        :
      <Products>
        {
          chosenProducts.map((product) => {
            return (
              <Product>
                <img src={product.image} alt={product.name}/>
                <h2>{product.name}</h2>
                <p>Quantidade: {product.quantity}</p>
                <em>Total: R$ {(product.price * product.quantity).toFixed(2)}</em>
              </Product>
            )
          })
        }

        <span>Total da compra: R$ {totalPrice}</span>  
      </Products>
    }
    </ReviewContainer>
  )
}

export default ProductsReview;

const ReviewContainer = styled.article`
  border: 2px solid white;
  background-color: rgb(242,243,244);
  margin-top: 30px;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  
  div{
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

const Products = styled.section`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  width: 90%;
  margin: 20px auto 0 auto;
`

const Product = styled.section`
  display:flex;
  margin-bottom: 20px;
  
  img{
      width: 120px;
  }
 
`