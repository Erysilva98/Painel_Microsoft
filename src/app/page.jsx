"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Link from "next/link";
import axios from "axios";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import LicencaAtiva from "@/components/licencaAtiva";
import NumUsuarios from "@/components/numUsuarios";
import CustoUsuario from "@/components/custoUsuario";
import TabelaLicenca from "@/components/tabelaLicenca";
import GraficoMensal from "@/components/graficoMensal";
import QuantLicenca from "@/components/quantLicenca";
import CustoAnual from "@/components/custoAnual";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((Error) => console.log("Erro ao obter os Dados:", Error))
  }, []);

  console.log(data.listarLicencaOrdenada);

  return (
    <Layout>
      {/* Componente do Header */}
      <header className="min-w-max sticky ">
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
            <div>
              <h1 className="text-3xl font-bold text-black ml-20 mt-14 mb-10">Painel Geral Grupo Moura</h1>
            </div>

            <div className="flex ml-20 mr-20 mt-10 justify-between">
              {/* Componente de Custo Total */}
              <Link href="/distribuidora">
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
                    <QuantLicenca data={data}/>
                  </div>
                  <div className="z-10">
                    {/* Componente Gráfico Mensal */}
                    <GraficoMensal />
                  </div>
                  <div className="h-max">
                  {/* Componente CustoAnual */}
                  <CustoAnual data={data}/>
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
    </Layout>
  )
}