"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import useClient from '@/app/useClient';
import Link from 'next/link';
import Image from 'next/image';

// Imagens
import Voltar from '@assets/Circle.svg';

// Componentes
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import CustoTotal from '@/components/custoTotal';

export default function DistribuidoraSlug({ params }) {
  const isClient = useClient();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isClient) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/distribuidora/${params.slug}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    if (params.slug) {
      fetchData();
    }
  }, [isClient, params.slug]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Não foram encontrados dados para o slug informado.</div>;
  }

  return (
    <>
      <header className='sticky'>
        {/* Componente do Header */}
        <Header />
      </header>
      <main className='bg-blue-background'>
        <div className='flex'>
            {/* Componente do Sidebar */}
            <div>
              <Sidebar />
            </div>
            <section className="flex-1">
              {/* Titulo da Página com botão de ordenamento*/}
              <div className="flex ml-24 h-9 w-full mt-10 mb-10">
                <Link href="/distribuidora">
                  <Image src={Voltar} className="flex w-10 h-10 mr-6" />
                </Link>
                <h1 className="text-3xl font-bold text-black ">{params.slug}</h1>   
              </div>
              <div>
                <p>Média do ID Custo Licença: {data.mediaIdCustoLicenca}</p>
                <p>Quantidade de Nome Exibição: {data.quantidadeNomeExibicao}</p>
                <p>Quantidade de Licenças: {data.quantidadeLicencas}</p>
                <p>Divisão Licenças por Média: {data.divisaoLicencasPorMedia.toFixed(2)}</p>
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