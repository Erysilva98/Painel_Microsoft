"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

// Imagens
import Voltar from '@assets/Circle.svg';

// Componentes
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import CustoTotal from '@/components/custoTotal';
import LicencaAtiva from '@/components/licencaAtiva';
import NumUsuarios from '@/components/numUsuarios';
import CustoUsuario from '@/components/custoUsuario';
import QuantLicenca from '@/components/quantLicenca';
import GraficoMensal from '@/components/graficoMensal';
import CustoAnual from '@/components/custoAnual';
import TabelaLicenca from '@/components/tabelaLicenca';

async function getIdDistribuidoraFromSlug(slug) {
  try {
    const response = await axios.get("http://localhost:4000/distribuidoras/");
    const distribuidoras = response.data;
    const distribuidora = distribuidoras.find(d => d.slug === slug);
    return distribuidora ? distribuidora.idDistribuidora : null;
  } catch (error) {
    console.error("Erro ao buscar as distribuidoras:", error);
    return null;
  }
}

export default function DistribuidoraSlug({ params }) {
  const [data, setData] = useState([]);
  const [idDistribuidora, setIdDistribuidora] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const distribuidoraId  = await getIdDistribuidoraFromSlug(params.slug);
      setIdDistribuidora(distribuidoraId);
      // Aqui você pode fazer qualquer outra operação com idDistribuidora
    }
    fetchData();
  }, [params.slug]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4000/distribuidora/${params.slug}`);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <header className='sticky'>
        {/* Componente do Header */}
        <Header />
      </header>
      <main className="bg-blue-background min-w-max">
        <div className='flex'>
          {/* Componente do Sidebar */}
          <div>
            <Sidebar />
          </div>
          <section className="flex-1">
            {/* Titulo da Página com botão de ordenamento*/}
            <div className="flex ml-24 h-9 mt-10 mb-10">
              <Link href="/distribuidora">
                <Image src={Voltar} className="flex w-10 h-10 mr-6" />
              </Link>
              <h1 className="text-3xl font-bold text-black mb-10">{idDistribuidora}</h1>
            </div>

            <div className="flex ml-20 mr-20 mt-10 justify-between">
              {/* Componente do Custo Total */}
              <Link href="/distribuidora">
                <CustoTotal data={data} />
              </Link>

              {/* Componente de Licenças */}
              <Link href="/usuario">
                <LicencaAtiva data={data} />
              </Link>

              <div className="flex flex-col w-fit space-y-2">
                {/* Componente de Número de Usuários */}
                <Link href="/usuario">
                  <NumUsuarios data={data} />
                </Link>

                {/* Componente de Custo por Usuário */}
                <Link href="/usuario">
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

              <div className="w-2/4 h-screen mt-4">
                {/* Componente Tabela de Licenças  */}
                <TabelaLicenca data={data} />
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}
