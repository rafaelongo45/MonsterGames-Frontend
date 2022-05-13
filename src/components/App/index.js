import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './../Home';
import CartPage from '../Cart';
import SignUp from './../SignUp';
import SignInPage from './../SignIn';
import CheckoutPage from '../Checkout';

import UserContext from './../../contexts/UserContext';
import ProductsContext from '../../contexts/ProductsContext';

function App(){

  function getUserInfo() {
    const token = localStorage.getItem('token_MonsterGames');
    if ( token !== undefined && token !== null && token !== '' ) {
      return {
        token:  localStorage.getItem('token_MonsterGames'),
        name:   localStorage.getItem('name_MonsterGames'),
        avatar: localStorage.getItem('avatar_MonsterGames')
      };
    } else {
      return { token: '', name: '', avatar: '' };
    }
  }

  const [ userInfo, setUserInfo ] = useState( getUserInfo );
  const [ chosenProducts, setChosenProducts ] = useState([])

  return (
    <BrowserRouter>
      <UserContext.Provider value={ { userInfo, setUserInfo } }>
      <ProductsContext.Provider value={ { chosenProducts, setChosenProducts } }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/mycart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </ProductsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;