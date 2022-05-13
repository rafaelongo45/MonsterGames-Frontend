import RenderHeader from "../Header";
import RenderFooter from "../Footer";
import RenderCheckoutPage from "./RenderCheckoutPage";

function CheckoutPage(){
  return (
    <>
      <RenderHeader/>
      <RenderCheckoutPage/>
      <RenderFooter/>
    </>
  )
}

export default CheckoutPage