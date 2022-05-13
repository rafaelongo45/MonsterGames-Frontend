import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import RenderProduct from "./RenderProduct";
import ProductsContext from "../../contexts/ProductsContext.js";

function RenderCartPage(){
  const navigate = useNavigate();
  const {chosenProducts} = useContext(ProductsContext)

  return (
    <>
      <Products>
        {
          chosenProducts.map((chosenProduct) => {
            return (
              <RenderProduct image={chosenProduct.image} price = {chosenProduct.price} name = {chosenProduct.name} id = {chosenProduct.productId} quantity = {chosenProduct.quantity}/>
            )
          })
        }
      </Products>
      
      <button onClick={() => navigate('/checkout')}>Checkout</button>
    </>

  )
};

export default RenderCartPage;

const Products = styled.section`
  display:flex;
  flex-direction:column;
  padding-top: 70px;
  padding-bottom: 30px;
  width: 80%;
  margin: 0 auto;
`