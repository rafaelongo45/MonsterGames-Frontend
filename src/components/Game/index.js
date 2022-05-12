import styled from 'styled-components';

function Game (props) {
  const {name,image,price} = props;
  return (
    <Product>
      <abbr title={name}>
        <img src={image} alt={name}/>
        <strong>R$ {price.toFixed(2).replace('.',',')}</strong>
      </abbr>
    </Product>
  );
}

const Product = styled.div`
  width: 160px;
  height: 210px;
  background-color: #fff;
  margin: 25px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;

  strong{
    position: absolute;
    bottom: 6px;
    right: 10px;
    color: var(--header-color);
  }

  img {
    width: 160px;
    height: 180px;
    position: absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;



export default Game;