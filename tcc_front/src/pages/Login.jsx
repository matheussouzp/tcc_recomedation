import React from "react";
import { Link } from 'react-router-dom';


const Form = () => {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">
        Fazer login
      </h1>
      <div className="w-96 mt-4 bg-stone-400 px-4 py-5 rounded-lg">
        <form className="flex flex-col gap-3">

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="email">Email</label>
            <input type="text" placeholder="Digite seu Email"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="email">Senha</label>
            <input type="password" placeholder="Digite seu Email"
              className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"></input>
          </div>

          <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 rounded-lg text-white">Entrar</button>
        </form>
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">
        Não possui cadastro? <Link to="/cadastrar" className="text-blue-500 hover:underline">Cadastra-se clicando aqui!</Link>
      </p>
    </div>
  );
};

export default Form;