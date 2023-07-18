import React from "react"

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
    <>
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
                <h1 className="text-3xl font-bold text-black ml-24 mt-14 mb-10">Painel RM</h1>
              </div>
              
              <div className="flex bg-red ml-24 mr-20 mt-10">
                {/* Componente de Custo Total */}
                <div>
                  <CustoTotal />
                </div>
                {/* Componente de Licenças */}
                <div className="ml-24">
                  <LicencaAtiva />
                </div>
              </div>

              <div className="flex ml-24 mr-20 mt-10">
                {/* Componente de Usuários */}
                <div className="flex w-full bg-red items-center">
                  <div className="space-y-10">
                    <NumUsuarios />
                    <CustoUsuario />
                  </div>
                  <div className="flex w-full ml-24">
                    {/* Componente de Gráfico Mensal */}
                    <GraficoMensal />
                  </div>
                </div>
                
              </div>

              <div className="flex bg-red ml-24 mr-20 mt-10">
                  {/* Componente Tabela de Licença */}
                  <div className="flex">
                    <TabelaLicenca />
                  </div>
                  
                  {/* Componente Quantidade de Licenças */}
              </div>
            </section>
          </div>
          <footer className="flex justify-center items-center bg-white h-24">
            <p>Desenvolvido por <a href="#" target="_blank" className="">Erimilson SIlva & Igor Nayan</a></p>
          </footer>
        </main>
      </>
  )
}