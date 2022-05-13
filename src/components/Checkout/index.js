import { useContext } from "react";

import ProductsContext from "../../contexts/ProductsContext";

function CheckoutPage(){
  const {chosenProducts} = useContext(ProductsContext)

  console.log(chosenProducts)
  return <>

  </>
}

export default CheckoutPage