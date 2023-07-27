"use client";
import React, {useEffect, useState} from "react";
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
                <h1 className="text-3xl font-bold text-black ml-20 mt-14 mb-10">Painel Geral Grupo Moura</h1>
              </div>
              
              <div className="flex ml-20 mr-20 mt-10 space-x-24">
                  {/* Componente de Custo Total */}
                  <Link href="/distribuidora">
                    <CustoTotal data={data}/>
                  </Link>
                
                  {/* Componente de Licenças */}
                  <Link href="/licenca">
                    <LicencaAtiva data={data} />
                  </Link>
              </div>

              <div className="flex ml-20 mr-44 mt-10">
                <div className="flex flex-col w-fit justify-center space-y-10">
                    {/* Componente de Número de Usuários */}
                    <Link href="/licenca">
                      <NumUsuarios data={data} />
                    </Link>

                    {/* Componente de Custo por Usuário */}
                    <Link href="/licenca">
                      <CustoUsuario data={data} />
                    </Link>
                    
                </div>
                {/* Componente Gráfico Mensal */}
                <div className="min-w-fit w-3/4 ml-40">
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