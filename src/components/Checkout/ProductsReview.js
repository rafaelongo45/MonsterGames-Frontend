import styled from "styled-components";

function ProductsReview(props){
  const {chosenProducts, totalPrice, setTotalPrice} = props;
  let total = 0;

  chosenProducts.forEach((product) => {
      total += (product.price * product.quantity)
  })

  setTotalPrice(total)

  return(
      <Products>
        <h1>Produtos escolhidos</h1>
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
  )
}

export default ProductsReview;

const Products = styled.section`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  border: 2px solid white;
  margin-top: 30px;
  padding: 20px 0;

`

const Product = styled.div`
  display:flex;
  margin-bottom: 20px;
  
  img{
      width: 120px;
  }
 
`