'use client'
import { useEffect, useState } from "react";

export default function Home() {
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

  return (
   <div className="flex flex-col justify-center items-center h-screen">
    {renderizarProdutos()}
   </div>
  );
}
