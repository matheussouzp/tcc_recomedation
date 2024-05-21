import Form from "./components/Form";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center"> 
       <h1 className="font-bold text-[2rem] text-white">
      Cadastro de usuário
    </h1>
    <div className="w-96 mt-4 bg-stone-400 px-4 py-5 rounded-lg">
      <Form/>
    </div>
    <p className="text-slate-100 text-xs w-96 mt-2 text-center">Ao se inscrever, voce passara a receber as informação.</p>
    </div>
  );
};