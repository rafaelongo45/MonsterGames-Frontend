import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from './../../contexts/UserContext';
import Home from './../Home';
import SignIn from './../SignIn';
import SignUp from './../SignUp';

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

  return (
    <BrowserRouter>
      <UserContext.Provider value={ { userInfo, setUserInfo } }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;