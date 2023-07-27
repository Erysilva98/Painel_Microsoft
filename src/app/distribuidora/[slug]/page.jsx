"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function DistribuidoraSlug({ params }) {
  const [data, setData] = useState(params);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [params.slug]);

  if (!loading) {
    return <div>Carregando...</div>;
  }

  if (data) {
    return <div>Não foram encontrados dados para o slug informado.</div>;
  }

  return (
    <>
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
            {/* Renderize os componentes necessários com base nos dados recebidos */}
            <div>
              <h1>Distribuidora: {params.slug}</h1>
              <p>Média do ID Custo Licença: {data.mediaIdCustoLicenca}</p>
              <p>Quantidade de Nome Exibição: {data.quantidadeNomeExibicao}</p>
              <p>Quantidade de Licenças: {data.quantidadeLicencas}</p>
              <p>Divisão Licenças por Média: {data.divisaoLicencasPorMedia.toFixed(2)}</p>
            </div>
            {/* Renderize os outros componentes aqui (caso necessário) */}
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
