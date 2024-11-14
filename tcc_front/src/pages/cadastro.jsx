import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../GlobalContext/GlobalContext"; // Importe o GlobalContext

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmação de senha
  const [error, setError] = useState("");
  const {setName: setGlobalName, setEmail: setGlobalEmail, setCodigo: setGlobalCodigo } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      setError("As senhas não são iguais.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/user", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        // Armazena as informações no localStorage
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('name', response.data.user.name);
        localStorage.setItem('codigo', response.data.user.id); // Armazenar ID se necessário

        // Logar usuário após cadastro
        setGlobalCodigo(response.data.user.id);
        setGlobalName(response.data.user.name);
        setGlobalEmail(response.data.user.email);
        navigate("/"); // Redireciona para a página inicial
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
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
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="confirmPassword">Confirme a Senha</label>
            <input
              type="password"
              placeholder="Confirme sua Senha"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
