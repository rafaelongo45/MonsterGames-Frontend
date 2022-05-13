import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";

import userContext from "../../contexts/UserContext.js"

function RenderSignInPage(){
  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(userContext);
  const [user, setUser] = useState({email: "", password: ""})
  
  function login(event){
    event.preventDefault();

    if(user.email === null){
      alert("Preencha os campos");
    }

    const promise = axios.post('http://localhost:5000/signin', user);
    
    promise.then((response) => {
      localStorage.setItem('token_MonsterGames', response.data.token);
      localStorage.setItem('name_MonsterGames', response.data.name);
      localStorage.setItem('avatar_MonsterGames', response.data.avatar);
      setUserInfo(response.data);
      navigate('/');
    })

    promise.catch(error => {
      alert(error.response.data)
      console.log(error);
    });
  }

  return(
    <Main>
      <Form onSubmit={login}>
        <input type="email" placeholder="Digite seu e-mail" value = {user.email} onChange={(e) => setUser({...user, email: e.target.value})}></input>
        <input type="password" placeholder="Digite sua senha" value = {user.password} onChange={(e) => setUser({...user, password: e.target.value})}></input>
        <button type="submit">Entrar</button>
      </Form>
      <Button onClick={()=> navigate('/signup')}>Ainda não tem cadastro? Crie sua conta!</Button>
    </Main>
  )
}

export default RenderSignInPage;

const Main = styled.main`
  width: 90%;
  min-height: 100%;
  margin: 0 auto;
  padding: 70px 0 30px 0;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  flex-direction:column;
`

const Form = styled.form`
  margin-top: 250px;
  display:flex;
  align-items:center;
  flex-direction:column;
  width: 20%;

  input{
    width: 320px;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  }

  input::placeholder{
    padding-left:0;
  }

  button{
    width: 320px;
    height: 40px;
    border: 1px solid rgb(168,28,7);
    border-radius: 5px;
    font-family: 'Creepster', cursive;
    color: white;
    background-color:rgb(168,28,7);
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  @media(max-width: 767px){
    width: 80%;
  }

  @media(max-width: 1440px), (min-width: 768){
    width: 70%;
  }
`

const Button = styled.button`
  border:none;
  background:none;
  width:fit-content;
  font-size: 16px;
  margin-top: 20px;
  cursor:pointer;
`