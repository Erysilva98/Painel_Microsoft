import React from "react"
import Layout from "./layout"

// Componentes
import Data from '@/components/data.jsx';
import Logotipo from '@/components/logotipo.jsx';
import Usuario from '@/components/usuario.jsx';
import Sidebar from "@/components/sidebar";
import Container from "@/components/container";
import CustoTotal from "@/components/custoTotal";

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
        <aside className="bg-white w-48 h-screen">
              <Sidebar />
        </aside>
        <section className="flex flex-1 justify-center">
          <div>
           {/* // <CustoTotal valor={teste} /> */}
          </div>
        </section>
        
      </main>
     
    </Layout>
  )
}