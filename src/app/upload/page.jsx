"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
//Icones
import IconeUp from "@assets/upload.svg";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import api from "@/services/api";

export default function Upload() {
  const [arquivo, setArquivo] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const atualizarArq = (event) => {
    setArquivo(event.target.files[0]);
  };

  const selecionarArq = async () => {
    if (!arquivo) {
      return;
    }

    setLoading(true); // Ativar o estado de loading

    const formData = new FormData();
    formData.append("excelData", arquivo);

    try {
      const response = await api.post("/importar", formData);

      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Arquivo Importado com Sucesso!",
          showConfirmButton: false,
          timer: 3000,
        });
        setArquivo(null);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data, // Mensagem de erro do servidor
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Erro ao enviar o arquivo.",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }

    setLoading(false); // Desativar o estado de loading após a requisição
  };

  return (
    <>
      <header>
        {/* Componente do Header */}
        <Header />
      </header>

      <main className="bg-blue-background min-w-max">
        <div className="flex">
          {/* Componente do Sidebar */}
          <div>
            {/* Componente do Sidebar */}
            <Sidebar />
          </div>
          <section className="flex-1">
            <div className="flex flex-col items-center m-20 h-3/4 bg-white">
              <span className="font-bold text-3xl mt-16">Importar dados</span>
              <div className="flex flex-col space-y-7 mt-14 items-center justify-center border border-gray-400 w-1/2 h-1/2">
                <Image src={IconeUp} />
                <p className="text-sm">
                  Selecione um arquivo XLSX, CSV, ODS ou TSV tamanho do arquivo
                  não superior a 10 MB
                </p>
                {/* Endpoint para envio do arquivo */}
                <div className="flex flex-col items-center">
                  <input type="file" onChange={atualizarArq} />
                  <button
                    onClick={selecionarArq}
                    disabled={loading} // Desativar o botão enquanto estiver carregando
                    className={`mt-8 w-32 border-2 border-blue-m200 rounded-lg px-3 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 hover:text-white ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
