import styled from "styled-components";
import { useContext, useState } from "react";

import ProductsSlider from "./ProductsSlider";
import ProductsContext from "../../contexts/ProductsContext";

function RenderCheckoutPage(){
  const [totalPrice, setTotalPrice] = useState(0);
  const {chosenProducts, setChosenProducts} = useContext(ProductsContext);

  return(
      <Page>
        <ProductsSlider chosenProducts = {chosenProducts} totalPrice = {totalPrice} setTotalPrice={setTotalPrice} />
      </Page>
  )
}

export default RenderCheckoutPage;

const Page = styled.main`
  padding-top: 70px;
  padding-bottom: 100px;
  width: 60%;
  margin: 0 auto;

`