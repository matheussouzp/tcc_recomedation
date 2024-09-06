import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { GlobalContext } from "../GlobalContext/GlobalContext"; // Importe o GlobalContext

const Form = () => {
  const { IsLoggedIn, setEmail } = useContext(GlobalContext); // Pegue as funções do GlobalContext
  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/auth", {
        email, // Passe o email corretamente
        password,
      });

      if (response.status === 200) {
        // Setar o estado de login no GlobalContext
        IsLoggedIn(true);
        setEmail(email);
        

        // Redirecionar após o login
        console.log("Login bem-sucedido", response.data);
        navigate("/"); // Ajuste conforme a rota da sua aplicação
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Credenciais inválidas, tente novamente.");
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">
        Fazer login
      </h1>
      <div className="w-96 mt-4 bg-stone-400 px-4 py-5 rounded-lg">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Digite seu Email"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
              value={email}
              onChange={(e) => setEmailInput(e.target.value)} // Alterar para setEmailInput
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 rounded-lg text-white">
            Entrar
          </button>
        </form>
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">
        Não possui cadastro? <Link to="/cadastrar" className="text-blue-500 hover:underline">Cadastra-se clicando aqui!</Link>
      </p>
    </div>
  );
};

export default Form;
