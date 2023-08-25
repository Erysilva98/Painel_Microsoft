"use client";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Link from "next/link";
import api from "@/services/api";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
              <h1 className="text-2xl font-bold text-black ml-20 mt-14 mb-10">
                PAINEL DE CUSTO MICROSOFT - GERAL
              </h1>
            </div>

            <div className="flex ml-20 mr-20 mt-10 justify-between">
              {/* Componente de Custo Total */}
              <Link href="/distribuidora">
                <CustoTotal data={data} />
              </Link>

              {/* Componente de Licenças */}
              <Link href="/licencas">
                <LicencaAtiva data={data} />
              </Link>

              <div className="flex flex-col w-fit space-y-2">
                {/* Componente de Número de Usuários */}
                <Link href="/licencas">
                  <NumUsuarios data={data} />
                </Link>

                {/* Componente de Custo por Usuário */}
                <Link href="/licencas">
                  <CustoUsuario data={data} />
                </Link>
              </div>
            </div>

            <div className="flex ml-20 mt-5 mr-20 space-x-4">
              <div className="flex flex-col w-3/5 space-y-2">
                <div className="z-20">
                  {/* Componente Quantidade de Licença */}
                  <QuantLicenca data={data} />
                </div>
                <div className="z-10">
                  {/* Componente Gráfico Mensal */}
                  <GraficoMensal data={data} />
                </div>
                <div className="h-max">
                  {/* Componente CustoAnual */}
                  <CustoAnual data={data} />
                </div>
              </div>

              <div className="w-2/4 h-screen">
                {/* Componente Tabela de Licenças  */}
                <TabelaLicenca data={data} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
