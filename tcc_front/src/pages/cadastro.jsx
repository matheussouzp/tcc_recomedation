import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../GlobalContext/GlobalContext"; // Importe o GlobalContext

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { IsLoggedIn, setName: setGlobalName, setEmail: setGlobalEmail } = useContext(GlobalContext); // Pega os setters do contexto global
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        // Define o estado global após o registro bem-sucedido
        IsLoggedIn(true); // Marca como logado
        setGlobalName(response.data.name); // Salva o nome globalmente
        setGlobalEmail(response.data.email); // Salva o email globalmente
        navigate("/"); // Redireciona para a página inicial ou qualquer outra rota protegida
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Erro no cadastro, tente novamente.");
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Cadastrar</h1>
      <div className="w-96 mt-4 bg-stone-400 px-4 py-5 rounded-lg">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Digite seu Email"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
