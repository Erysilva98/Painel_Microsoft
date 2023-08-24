"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
export default function ArqUpload({ endpoint }) {
  const [arquivo, setArquivo] = useState(null);

  const atualizarArq = (event) => {
    setArquivo(event.target.files[0]);
  };

  const selecionarArq = async () => {
    if (!arquivo) {
      console.log("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("excelData", arquivo);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Arquivo Importado com Sucesso!",
          showConfirmButton: false,
          timer: 3000,
        });
        setArquivo(null);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Erro ao enviar o arquivo.",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={atualizarArq} />
      <button
        onClick={selecionarArq}
        className="mt-8 w-32 border-2 border-blue-m200 rounded-lg px-3 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 hover:text-white"
      >
        Enviar
      </button>
    </div>
  );
}
