import { useContext } from "react";
import styled from 'styled-components';
import {FaShoppingCart} from "react-icons/fa"

import ProductsContext from "../../contexts/ProductsContext.js";

function Game (props) {
  const {name,image,price, id} = props;
  const {chosenProducts, setChosenProducts} = useContext(ProductsContext);

  return (
    <Product>
      <abbr title={name}>
        <img src={image} alt={name}/>
        <button onClick={() => setChosenProducts([...chosenProducts, {name, image, price, productId: id, quantity: 1}])}> <FaShoppingCart/></button>
        <strong>R$ {price.toFixed(2).replace('.',',')}</strong>
      </abbr>
    </Product>
  );
}

const Product = styled.div`
  width: 180px;
  height: 280px;
  background-color: #fff;
  margin: 25px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  img{
    cursor: pointer;
  }

  button{
    position: absolute;
    bottom: 0;
    left: 10px;
    background:none;
    border:none;
    font-size: 24px;
    color: var(--header-color);
    cursor:pointer;
  }

  strong{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: var(--header-color);
  }

  img {
    width: 180px;
    position: absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;



export default Game;