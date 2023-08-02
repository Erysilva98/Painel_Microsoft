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
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000");
        setData(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      {/* Componente do Header */}
      <header className="sticky">
        <Header />
      </header>

      <main className="bg-blue-background">
        <div className="flex">
          {/* Componente do Sidebar */}
          <div>
            <Sidebar />
          </div>
          <section className="flex-1">
            {/* Titulo da Página */}
            <div>
              <h1 className="text-3xl font-bold text-black ml-10 mt-14 mb-10">Painel Geral Grupo Moura</h1>
            </div>

            <div className="flex mr-10 mt-10 justify-evenly items-center">
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

            <div className="flex ml-16 mt-5 mb-10">
                <div className="flex flex-col w-9/12 space-y-2 ">
                  <div className="z-20">
                    {/* Componente Quantidade de Licença */}
                    <QuantLicenca />
                  </div>
                  <div className="z-10">
                    {/* Componente Gráfico Mensal */}
                    <GraficoMensal />
                  </div>
                  <div>
                  {/* Componente CustoAnual */}
                  <CustoAnual />
                  </div>
                </div>

                <div className="w-9/12 mt-4 ml-20">
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