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
import QuantidLicenca from "@/components/quantiLicenca";


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
            <aside className="static">
              <Sidebar />
            </aside>
            <section className="flex-1">
              {/* Titulo da Página */}
              <div>
                <h1 className="text-3xl font-bold text-black ml-20 mt-14 mb-10">Painel Geral Grupo Moura</h1>
              </div>
              
              <div className="flex ml-20 mr-20 mt-10">  
                <div className="flex w-full justify-between space-x-10">
                  {/* Componente de Custo Total */}
                  <CustoTotal />
                
                  {/* Componente de Licenças */}
                  <LicencaAtiva />
                </div>
              </div>

              <div className="flex ml-20 mr-20 mt-10 justify-between space-x-10">
                {/* Componente de Usuários */}
                <div className="flex flex-col w-3/12 justify-center space-y-10">
                    <NumUsuarios />
                    <CustoUsuario />
                </div>
                {/* Componente de Gráfico Mensal */}
                <div className="w-8/12">      
                  <GraficoMensal />
                </div>
              </div>

              <div className="flex ml-20 mr-20 mt-10 space-x-10">
                <div className="flex w-3/12 mr-24">
                  {/* Componente Tabela de Licenças */}
                  <TabelaLicenca />
                </div>
                <div className="flex w-8/12">
                  {/* Componente Tabela de Licenças */}
                  <QuantidLicenca />  
                </div>
              </div>
            </section>
          </div>
          <footer className="flex justify-center items-center bg-white h-24">
            <p>Desenvolvido por <a href="#" target="_blank" className="">Erimilson SIlva & Igor Nayan</a></p>
          </footer>
        </main>
      </Layout>
  )
}