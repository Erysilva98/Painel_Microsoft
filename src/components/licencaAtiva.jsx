"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

//Icones 
import Icone from "@assets/licencaIcon.svg";

export default function LicencaAtiva({ data }) {

    // Tratamento de dados para o componente Custo Total
    const valor = `${(data?.quantidadeLicencas || 0)}`;
    const texto = "Licenças Ativas";
    const status = "Aumentou 2% em Relação ao Mês Anterior";
    const seta = "moderateIncrease";

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Icone} alt="Gráfico" />
                </div>

                <span>{texto}</span>
                <Metric className='mb-2.5'>{valor}</Metric>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </div>
        </div>
    );
};

// Defina os tipos das props utilizando PropTypes
LicencaAtiva.propTypes = {
    params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
    }).isRequired,
};