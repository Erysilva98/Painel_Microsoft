import React from "react";
import Image from "next/image";

//Icones
import IconeUp from "@assets/upload.svg";

// Componentes
import Header from "@/components/header";
import ArqUpload from "@/components/arqUpload";
import Sidebar from "@/components/sidebar";

export default function Upload() {
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
                <ArqUpload endpoint="http://localhost:4000/teste" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
