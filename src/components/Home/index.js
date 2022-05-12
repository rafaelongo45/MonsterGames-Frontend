import axios from 'axios';
import styled from 'styled-components';
import React,{ useState , useEffect} from 'react';

import RenderHeader from "../Header/index.js";
import RenderFooter from '../Footer/index.js';

import Game from './../Game';

function Home (){
  const [games, setGames] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:5000/products/'
    const promise = axios.get(URL);
    promise.then((promise) => { setGames([...promise.data]); });
    promise.catch((err)=>{
      alert('Ocorreu um erro - código ' + err.response.status);
      console.log(err);
    });
  },);

  return (
    <>
      <RenderHeader/>

      <Main>

        {games?.map( ({_id,name,image,price}) => 
          <Game key={_id} name={name} image={image} price={price}/>
        )}
      
      </Main>
      
      <RenderFooter/>
    </>
  );
}

const Main = styled.main`
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;//space-evenly
    margin-bottom: 30px;
    padding-top: 70px;
`;

export default Home;