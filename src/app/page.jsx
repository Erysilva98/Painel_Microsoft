import React from "react"
import Layout from "./layout"

// Componentes
import Data from '@/components/data.jsx';
import Logotipo from '@/components/logotipo.jsx';
import Usuario from '@/components/usuario.jsx';
import Sidebar from "@/components/sidebar";

export default function Home() {

  const teste = "Teste de propriedade";

  return (
    <Layout>
      <header className="bg-gray-background">
        <nav className="flex w-full">
          <div className="flex flex-1 justify-between">
            {/* Componente Logotipo.jsx */}
            <div>
              <Logotipo />
            </div>
            <div className="flex">
               {/* Componente data.jsx */}
              <Data />
              {/* Componente usuario.jsx */}
              <Usuario />
            </div>
          </div>
        </nav>
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-medium">Painel Geral Grupo Moura</h3>
        </div>
        {/* Teste de Adicionar um contéudo ao compomente Custo Total */}
        {/* <CustoTotal props={teste}/> */}
      </main>
    </Layout>
  )
}