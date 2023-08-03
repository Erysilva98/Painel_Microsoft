"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
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
import GraficoMensal from '@/components/graficoMensal';
import QuantLicenca from '@/components/quantLicenca';
import TabelaLicenca from '@/components/tabelaLicenca';
import CustoAnual from '@/components/custoAnual';

export default function DistribuidoraSlug({ params }) {
  const [data, setData] = useState([]);
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
                <h1 className="text-3xl font-bold text-black mb-10">{params.slug}</h1>   
              </div>
              
              <div className="flex ml-20 mr-10 mt-10 space-x-2">
                {/* Componente de Custo Total */}
                <Link href="/usuario">
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
                    <QuantLicenca />
                  </div>
                  <div className="z-10">
                    {/* Componente Gráfico Mensal */}
                    <GraficoMensal />
                  </div>
                  <div className="h-max">
                  {/* Componente CustoAnual */}
                  <CustoAnual data={data}/>
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

// Defina os tipos das props utilizando PropTypes
DistribuidoraSlug.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};