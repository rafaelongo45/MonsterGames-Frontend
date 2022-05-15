import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState, useContext, useRef } from "react";

import userContext from "../../contexts/UserContext.js"

function RenderSignInPage(){
  const navigate = useNavigate()
  const { setUserInfo } = useContext(userContext);
  const [user, setUser] = useState({email: "", password: ""})
    
  const focus = useRef();

  function login(event){
    event.preventDefault();

    const promise = axios.post('https://monstergames-projeto14.herokuapp.com/signin', user);
    
    promise.then((response) => {
      localStorage.setItem('token_MonsterGames', response.data.token);
      localStorage.setItem('name_MonsterGames', response.data.name);
      localStorage.setItem('avatar_MonsterGames', response.data.avatar);
      setUserInfo(response.data);
      alert('Bem-vind(e)' + response.data.name);
      navigate('/');
    })

    promise.catch(error => {
      alert(error.response.data)
      console.log(error);
      focus.current.focus();
    });
  }

  return(
    <Container>
      <Main>
        <Form onSubmit={login}>
          <input type="email" placeholder="Digite seu e-mail" required ref={focus}
            value = {user.email} onChange={(e) => {
              setUser({...user, email: e.target.value});
              e.target.style="border: 1px solid #fff;"
            }}

            onInvalid = {(e) => e.target.style="border: 1px solid red;"}
            />

          <input type="password" placeholder="Digite sua senha" required
            value = {user.password} onChange={(e) => {
              setUser({...user, password: e.target.value});
              e.target.style="border: 1px solid #fff;"
            }}
            onInvalid = {(e) => e.target.style="border: 1px solid red;"}/>

          <button type="submit">Entrar</button>
        </Form>
        <Button onClick={()=> navigate('/signup')}><strong>Ainda não tem cadastro? Crie sua conta!</strong></Button>
      </Main>
    </Container>
  )
}

export default RenderSignInPage;

const Container = styled.main`
  height: 100vh;
  background-image: url(https://hdwallback.net/wp-content/uploads/2018/02/Game-4k-Wallpapers-of-PC-games.jpg);
  background-size: cover;
  background-position: top;
`;

const Main = styled.main`
  width: 90%;
  min-height: 100%;
  margin: 0 auto;
  padding: 70px 0 30px 0;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  
`

const Form = styled.form`
  display:flex;
  align-items:center;
  flex-direction:column;
  width: 20%;

  button:hover{
    background-color:rgb(168,28,7);
  }

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
    background-color: rgb(174,12,0);
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

  strong{
    color: #fff;
  }
`