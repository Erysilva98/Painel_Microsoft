"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useClient from '@/app/useClient';

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
      <header>{/* Renderize o componente Header aqui (caso necessário) */}</header>
      <main>
        {/* Renderize os componentes necessários com base nos dados recebidos */}
        <div>
          <h1>Distribuidora: {params.slug}</h1>
          <p>Média do ID Custo Licença: {data.mediaIdCustoLicenca}</p>
          <p>Quantidade de Nome Exibição: {data.quantidadeNomeExibicao}</p>
          <p>Quantidade de Licenças: {data.quantidadeLicencas}</p>
          <p>Divisão Licenças por Média: {data.divisaoLicencasPorMedia.toFixed(2)}</p>
        </div>
        {/* Renderize os outros componentes aqui (caso necessário) */}
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