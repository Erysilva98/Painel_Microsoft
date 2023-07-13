import React from "react"
import Layout from "./layout"

// Componentes
import Data from '@/components/data.jsx';
import Logotipo from '@/components/logotipo.jsx';
import Usuario from '@/components/usuario.jsx';
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import LicencaAtiva from "@/components/licencaAtiva";
import NumUsuarios from "@/components/numUsuarios";
import CustoUsuario from "@/components/custoUsuario";
import TabelaLicenca from "@/components/tabelaLicenca";


export default function Home() {
  return (
    <Layout>
      <header >
        <nav className="flex w-full h-20">
          <div className="flex flex-1 justify-between">
            {/* Componente Logotipo.jsx */}
            <div className="ml-16 mt-3 mb-3">
              <Logotipo />
            </div>
            <div className="flex space-x-24 items-center mr-6">
               {/* Componente data.jsx */}
              <Data />
              {/* Componente usuario.jsx */}
              <Usuario />
            </div>
          </div>
        </nav>
      </header>
      
      <main className="bg-blue-background">
        <div className="flex">
          <aside className="bg-white w-48 min-w-fit">
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
              <div>
                {/* Componente de Gráfico Mensal */}
                
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