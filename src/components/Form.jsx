import React from "react";

const Form = () => {
    return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col">
          <label className="text-sm" htmlFor="name">Nome</label>
          <input type="text" placeholder="Digite seu nome" 
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"></input>
      </div>
      <div className="flex flex-col">
          <label className="text-sm" htmlFor="email">Email</label>
          <input type="text" placeholder="Digite seu Email" 
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"></input>
      </div>
      <div className="flex flex-col">
          <a href="#" className="text-xs underline mb-2">Leia os termos</a>
          <div className="flex gap-2 item-center">
              <input type="checkbox" />
              <label className="text-sm" htmlFor="agree"> Concordo com os termos</label>
          </div>
      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 rounded-lg text-white">Cadastrar</button>
    </form>
    );
  };
  
  export default Form;