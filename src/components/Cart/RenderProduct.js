import styled from 'styled-components'
import {CgTrash} from 'react-icons/cg';
import { useState, useContext } from "react";

import ProductsContext from "../../contexts/ProductsContext.js";


function RenderProduct(props){
  const {chosenProducts, setChosenProducts} = useContext(ProductsContext)
  const [newQuantity, setNewQuantity] = useState(1);

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
          <form>
            <select value = {newQuantity} onChange={getnewQuantity}>
              <option value = "1">1</option>
              <option value = "2">2</option>
              <option value = "3">3</option>
              <option value = "4">4</option>
              <option value = "5">5</option>
            </select>
          </form>
        <p>R$ {props.price}</p>
        <span onClick = {() => removeProduct(props.id)}><CgTrash/></span>
      </Info>
    </Product>
  )
}

export default RenderProduct;

const Product = styled.div`
  margin-top: 30px;
  border: 1px solid grey;
  border-radius: 6px;
  display: flex;
  height: 150px;
  align-items:center;
  justify-content: space-between;
  background-color: rgba(255,255,255, 0.9);

  img{
    width: 80px;
    border-radius: 6px;
    height: 110px;
    margin-left: 10px;
  }

`

const Info = styled.aside`
  width: 65%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  position:relative;

  h1{
    font-weight: 700;
    margin-left: 15px;
    margin-top: 15px;
    height: fit-content;
  }

  select{
    margin-top: 13px;
    margin-left: 15px;
    border-radius: 5px;
    background-color:white;
    height:fit-content;
  }

  p{
    font-weight: 700;
    text-align:center;
    width: 70%;
  }

  span{
    position: absolute;
    bottom: 0;
    right: 15px;
    font-size: 20px;
  }
`