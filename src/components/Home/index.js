import axios from 'axios';
import styled from 'styled-components';
import React,{ useState , useEffect} from 'react';

import RenderHeader from "../Header/index.js";
import RenderFooter from '../Footer/index.js';

import Game from './../Game';

function Home (){
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const URLBASE = 'http://localhost:5000/products'
    const URL = search !== '' ? `${URLBASE}?genre=${search}` : URLBASE;
    const promise = axios.get(URL);
    promise.then((promise) => { setGames([...promise.data]); });
    promise.catch((err)=>{
      alert('Ocorreu um erro - código ' + err.response.status);
      console.log(err);
    });
  },[search]);

  function getSearch (value) {
    setSearch(value);
  }

  return (
    <>
      <RenderHeader getSearch={getSearch}/>
      <Container>
        {search !== '' &&
        <Div>Exibindo resultados para <span>{search}</span></Div>
        }
        <Main>
          {games?.map( ({_id,name,image,price}) => 
            <Game key={_id} name={name} image={image} price={price}/>
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
    margin-bottom: 30px;
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

export default Home;