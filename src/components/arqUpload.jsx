"use client";
import { useState } from "react";

export default function ArqUpload () {
  const [arquivo, setarquivo] = useState(null);

  const atualizarArq = (event) => {
    setarquivo(event.target.files[0]);
  };

  const selecionarArq = async () => {
    if (!arquivo) {
      console.log("Nenhum arquivo selecionado.");
      return;
    }

    const formDados = new FormDados();
    formDados.append("file", arquivo);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Arquivo enviado com sucesso!");
        setarquivo(null);
      } else {
        console.log("Erro ao enviar o arquivo.");
      }
    } catch (error) {
      console.log("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={atualizarArq} />
      <button onClick={selecionarArq} className="mt-8 w-32 border-2 border-blue-m200 rounded-lg px-3 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 hover:text-white">
        Enviar
      </button>
    </div>
  );
};

