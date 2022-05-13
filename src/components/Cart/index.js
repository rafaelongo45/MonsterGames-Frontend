import RenderFooter from "../Footer/index.js";
import RenderHeader from "../Header/index.js";
import RenderCartPage from "./RenderCartPage.js";

function CartPage(){
  return (
    <>
      <RenderHeader/>
      <RenderCartPage/>
      <RenderFooter/>
    </>
  )
}

export default CartPage;