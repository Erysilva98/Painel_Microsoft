"use client";
import React from "react"
import Layout from "./layout"
import Link from "next/link"

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

export default function Home() {
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
                <h1 className="text-3xl font-bold text-black ml-20 mt-14 mb-10">Painel Geral Grupo Moura</h1>
              </div>
              
              <div className="flex ml-20 mr-20 mt-10 space-x-24">
                  {/* Componente de Custo Total */}
                  <Link href="/distribuidora">
                    <CustoTotal />
                  </Link>
                
                  {/* Componente de Licenças */}
                  <Link href="/licenca">
                    <LicencaAtiva />
                  </Link>
              </div>

              <div className="flex ml-20 mr-44 mt-10">
                <div className="flex flex-col w-fit justify-center space-y-10">
                    {/* Componente de Número de Usuários */}
                    <Link href="/licenca">
                      <NumUsuarios />
                    </Link>

                    {/* Componente de Custo por Usuário */}
                    <Link href="/licenca">
                      <CustoUsuario />
                    </Link>
                    
                </div>
                {/* Componente Gráfico Mensal */}
                <div className="min-w-fit w-3/4 ml-56">
                  <GraficoMensal />
                </div>
              </div>

              <div className="flex ml-20 mt-10 mb-10">
                <div className="mr-3">
                  {/* Componente Tabela de Licenças */}
                  <TabelaLicenca />
                </div>
                <div className="min-w-fit ml-36 w-1/2">
                  {/* Componente Quantidade de Licença */}
                  <QuantLicenca />
                </div>
              </div>
            </section>
          </div>
      </main>
    </Layout>
  )
}