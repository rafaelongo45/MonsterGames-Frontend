import axios from 'axios';
import styled from 'styled-components';
import React,{ useState , useEffect} from 'react';

import RenderHeader from "../Header/index.js";
import RenderFooter from '../Footer/index.js';

import Game from './../Game';

import {  useParams } from 'react-router-dom';

function Search (props){

  const { search } = useParams();

  //const { search } = props;

  const [games, setGames] = useState([]);

  useEffect(() => {
    const URL = `https://monstergames-projeto14.herokuapp.com/products?genre=${search}`;
    const promise = axios.get(URL);
    promise.then((promise) => { setGames([...promise.data]); });
    promise.catch((err)=>{
      alert('Ocorreu um erro - código ' + err.response.status);
      console.log(err);
    });
  },[search]);

  return (
    <>
      <RenderHeader />
      
      {console.log(search)}
     
      <Container>
        <Div>Exibindo resultados para <span>{search}</span></Div>
        <Main>
          {games?.map( ({_id,name,image,price}) => 
            <Game key={_id} name={name} image={image} price={price} id = {_id}/>
          )}       
        </Main>
      </Container>
      <RenderFooter/>
    </>
  );
}

const Container = styled.div`
  max-width: 840px;
  margin: 0 auto;
  padding-top: 70px;
`;

const Main = styled.main`
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 30px;
`;

const Div = styled.div`
  margin: 20px 20px;
  font-size: 20px;
  font-weight: 700;
  
  span {
    text-transform: uppercase;
    font-style: italic;
  }

`;

export default Search;