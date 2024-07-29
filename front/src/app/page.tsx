'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [produto, setProduto]= useState<any>({})
  const [produtos, setProdutos]= useState<any>([])

  useEffect(() => {
    obterProdutos()
  }, []);

  async function obterProdutos() {
    const resp =  await fetch('http://localhost:3001/produtos');
    const produtos = await resp.json();
    setProdutos(produtos)
  }

  function renderizarProdutos() {
    return (
      <div className="flex flex-col gap-2">
        {produtos.map((produto: any) => (
          <div key={produto.id} className="flex gap-2 bg-zinc-800 p-2 rounded-md">
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    );
  }

  function renderizarFormProduto() {
    return (
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input 
          id="nome"
          type="text" 
          value={produto.nome} 
          onChange={(e) => ({ ...produto, nome: e.target.value})}
          className='bg-zinc-700 p-2 rounded-md' />
        </div>
      </div>
    );
  }

  return (
   <div className="flex flex-col justify-center items-center h-screen gap-10">
    {renderizarFormProduto()}
    {renderizarProdutos()}
   </div>
  );
}
