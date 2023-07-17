import React from "react"
import Layout from "./layout"

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import LicencaAtiva from "@/components/licencaAtiva";
import NumUsuarios from "@/components/numUsuarios";
import CustoUsuario from "@/components/custoUsuario";
import TabelaLicenca from "@/components/tabelaLicenca";
import GraficoMensal from "@/components/graficoMensal";


export default function Home() {
  return (
    <Layout>
      {/* Componente do Header */}
      <header >
        <Header />
      </header>
      
      <main className="bg-blue-background">
        <div className="flex">
          {/* Componente do Sidebar */}
          <aside>
            <Sidebar />
          </aside>
          <section className="flex-1">
            {/* Titulo da Página */}
            <div>
              <h1 className="text-3xl font-bold text-black ml-24 mt-14 mb-10">Painel Geral Grupo Moura</h1>
            </div>
            
            <div className="flex">
              {/* Componente de Custo Total */}
              <div className="flex ml-24 mr-24">
                <CustoTotal />
              </div>
              {/* Componente de Licenças */}
              <div>
                <LicencaAtiva />
              </div>
            </div>
            <div className="flex ml-24">
              {/* Componente de Usuários */}
              <div className="flex flex-col mt-10 ">
                <div className="mb-8">
                  <NumUsuarios />
                </div>
                <div>  
                  <CustoUsuario />
                </div>
              </div>
              <div className="flex flex-row ">
                {/* Componente de Gráfico Mensal */}
                <div className="flex w-full">
                  <GraficoMensal />
                </div>
              </div>
            </div>
            <div className="flex ml-24 mt-10 mb-11">
                {/* Componente Tabela de Licença */}
                <TabelaLicenca />
            </div>
          </section>
         
        </div>
      </main>
     
    </Layout>
  )
}