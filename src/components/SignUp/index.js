import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";

function SignUp() {
  const { REACT_APP_DB_URL } = process.env;
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
    repeat_password: "",
  });
  console.log(REACT_APP_DB_URL);

  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();

    if (user.password !== user.repeat_password) {
      alert("As senhas são diferentes!");
      return;
    }

    const URL = `${REACT_APP_DB_URL}/signup`;

    const promise = axios.post(URL, user);

    promise.then((promise) => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/signin");
    });

    promise.catch((err) => {
      if (err.response.status === 409) alert("Email já cadastrado!");
      else alert("Ocorreu um erro no cadastro - código " + err.response.status);
      console.log(err);
    });
  }

  return (
    <>
      <Header />
      <Main>
        <Form onSubmit={signUp}>
          <Input
            type="text"
            placeholder="* Nome"
            required
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
              e.target.style = "border: 1px solid #fff;";
            }}
            onInvalid={(e) => (e.target.style = "border: 1px solid red;")}
          />

          <Input
            type="email"
            placeholder="* E-mail"
            required
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
              e.target.style = "border: 1px solid #fff;";
            }}
            onInvalid={(e) => (e.target.style = "border: 1px solid red;")}
          />

          <Input
            type="password"
            placeholder="* Senha"
            required
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              e.target.style = "border: 1px solid #fff;";
            }}
            onInvalid={(e) => (e.target.style = "border: 1px solid red;")}
          />

          <Input
            id="confirmPwd"
            type="password"
            placeholder="* Confirme a senha"
            required
            value={user.repeat_password}
            onChange={(e) => {
              setUser({ ...user, repeat_password: e.target.value });
              e.target.style = "border: 1px solid #fff;";
            }}
            onInvalid={(e) => (e.target.style = "border: 1px solid red;")}
          />

          <Input
            type="url"
            placeholder="Sua linda foto"
            value={user.avatar}
            onChange={(e) => {
              setUser({ ...user, avatar: e.target.value });
              e.target.style = "border: 1px solid #fff;";
            }}
            onInvalid={(e) => (e.target.style = "border: 1px solid red;")}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to={"/signin"}>
          <strong>Já tem uma conta? Entre agora!</strong>
        </Link>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(https://hdwallback.net/wp-content/uploads/2018/02/Game-4k-Wallpapers-of-PC-games.jpg);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    margin-top: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button:hover {
    background-color: rgb(168, 28, 7);
  }
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);

  ::placeholder {
    padding-left: 0;
  }
`;

const Button = styled.button`
  width: 320px;
  height: 40px;
  border: 1px solid rgb(168, 28, 7);
  border-radius: 5px;
  font-family: "Creepster", cursive;
  color: white;
  background-color: rgb(174, 12, 0);
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export default SignUp;
