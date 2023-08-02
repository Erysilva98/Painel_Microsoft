"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

//Icones
import Voltar from "@assets/Circle.svg";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import LicencaAtiva from "@/components/licencaAtiva";
import NumUsuarios from "@/components/numUsuarios";
import CustoUsuario from "@/components/custoUsuario";
import GraficoMensal from "@/components/graficoMensal";
import TabelaLicenca from "@/components/tabelaLicenca";
import QuantLicenca from "@/components/quantLicenca";

export default function Matriz() {
  return (
    <>
      {/* Componente do Header */}
      <header className="sticky">
        <Header />
      </header>
        
        <main className="bg-blue-background min-w-max">
          <div className="flex">
            {/* Componente do Sidebar */}
            <div>
              <Sidebar />
            </div>
            <section className="flex-1"> 

              {/* Titulo da Página */}
              <div className="flex ml-20 mt-14 mb-10 items-center">
                <Link href="/distribuidora">
                  <Image src={Voltar} className="flex w-10 h-10 mr-6" />
                </Link>
                <h1 className="flex text-3xl font-bold text-black">Painel Geral RM Pálacio Matriz</h1>
              </div>
              
              <div className="flex ml-20 mr-20 mt-10 justify-between">
              {/* Componente de Custo Total */}
              <Link href="/licenca">
                <CustoTotal data={data} />
              </Link>

              {/* Componente de Licenças */}
              <Link href="/licenca">
                <LicencaAtiva data={data} />
              </Link>

              <div className="flex flex-col w-fit space-y-2">
                {/* Componente de Número de Usuários */}
                <Link href="/usuario">
                  <NumUsuarios data={data} />
                </Link>

                {/* Componente de Custo por Usuário */}
                <Link href="/usuario">
                  <CustoUsuario data={data} />
                </Link>
              </div>
            </div>

            <div className="flex ml-20 mt-5 mr-20 space-x-4">
                <div className="flex flex-col w-3/5 space-y-2">
                  <div className="z-20">
                    {/* Componente Quantidade de Licença */}
                    <QuantLicenca />
                  </div>
                  <div className="z-10">
                    {/* Componente Gráfico Mensal */}
                    <GraficoMensal />
                  </div>
                  <div className="h-max">
                  {/* Componente CustoAnual */}
                  <CustoAnual />
                  </div>
                </div>

                <div className="w-2/4 h-screen mt-4">
                  {/* Componente Tabela de Licenças  */}
                  <TabelaLicenca data={data} />
                </div>             
              </div>   

            </section>
          </div>
      </main>
    </>
  );
}
