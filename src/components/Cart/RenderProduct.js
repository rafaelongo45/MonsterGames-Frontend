import styled from 'styled-components'
import {CgTrash} from 'react-icons/cg';
import { useState, useContext } from "react";

import ProductsContext from "../../contexts/ProductsContext.js";


function RenderProduct(props){
  const {chosenProducts, setChosenProducts} = useContext(ProductsContext)
  const [newQuantity, setNewQuantity] = useState(1);

  let total = 0;

  chosenProducts.forEach((product) => {
      total += (product.price * product.quantity)
  })

  props.setTotalPrice(total)

  function changeQuantity(id, value){
    let obj = chosenProducts.find(product => {
      return product.productId === id
    })

    obj.quantity = parseInt(value)
  }

  function getnewQuantity(e){
    setNewQuantity(e.target.value);
    changeQuantity(props.id, e.target.value);
  }

  function removeProduct(id){
    let newArray = [];

    newArray = chosenProducts.filter((product) => {
      return product.productId !== id
    })

    setChosenProducts([...newArray]);
  }

  return(
    <Product>
      <img src={props.image} alt={props.name}/>
      <Info>
        <h1>{props.name}</h1>
        <p>R$ {(props.price * props.quantity).toFixed(2)}</p>

          <form>
            <select value = {props.quantity} onChange={getnewQuantity}>
              <option value = "1">1</option>
              <option value = "2">2</option>
              <option value = "3">3</option>
              <option value = "4">4</option>
              <option value = "5">5</option>
            </select>
          </form>
        <span onClick = {() => removeProduct(props.id)}><CgTrash/></span>
      </Info>
    </Product>
  )
}

export default RenderProduct;

const Product = styled.article`
  border: 1px solid rgb(191,193,194);
  border-radius: 12px;
  display: flex;
  height: 180px;
  width: 45%;
  align-items:center;
  justify-content:start;
  margin: 0 0 10px 60px;
  position:relative;

  :first-child{
    margin-top: 30px;
  }

  img{
    width: 120px;
    border-radius: 6px;
    height: 160px;
    margin-left: 10px;
  }
`

const Info = styled.aside`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  position:relative;

  h1{
    font-weight: 700;
    margin-left: 25px;
    margin-top: 15px;
    height: fit-content;
  }

  select{
    right: 15px;
    top: 35%;
    border-radius: 6px;
    background-color:white;
    height: 35px;
    width: 35px;
    position:absolute;
  }

  p{
    font-weight: 700;
    text-align:center;
    position:absolute;
    bottom: 65px;
    right: 65px;
  }

  span{
    position: absolute;
    bottom: 0;
    right: 23px;
    font-size: 20px;
    cursor:pointer;
  }
`