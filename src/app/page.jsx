import React from "react"
import Layout from "./layout"

// Componentes
import Data from '@/components/data.jsx';
import Logotipo from '@/components/logotipo.jsx';
import Usuario from '@/components/usuario.jsx';
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import NumUsuarios from "@/components/numUsuarios";
import LicencaAtiva from "@/components/licencaAtiva";
import CustoUsuario from "@/components/custoUsuario";

export default function Home() {
  return (
    <Layout>
      <header >
        <nav className="flex w-full">
          <div className="flex flex-1 justify-between">
            {/* Componente Logotipo.jsx */}
            <div className="ml-16 mt-3 mb-3">
              <Logotipo />
            </div>
            <div className="flex space-x-24 items-center mr-16">
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
          <aside className="bg-white w-48 h-screen">
            <Sidebar />
          </aside>
          <section className="flex-1">
            {/* Titulo da Página */}
            <div>
              <h1 className="text-3xl font-bold text-black ml-20 mt-14 mb-10">Painel Geral Grupo Moura</h1>
            </div>
            
            <div className="flex">
              {/* Componente de Custo Total */}
              <div className="flex mx-auto ml-20">
                <CustoTotal />
              </div>
              {/* Componente de Licenças */}
              <div className="flex container ml-48">
                <LicencaAtiva />
              </div>
            </div>

            <div className="mt-5 space-y-8">
              <div className="flex">
                <div className="flex-col ml-20">
                  <NumUsuarios />

                </div>
                <div className="flex-1 ml-48">
                  <CustoUsuario />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
     
    </Layout>
  )
}