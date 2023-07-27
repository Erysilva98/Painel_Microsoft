"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

//Icones 
import Icone from "@assets/licencaIcon.svg";

export default function LicencaAtiva({data}) {

     // Tratamento de dados para o componente Custo Total
     const valor = `${(data?.quantidadeLicencas || 0)}`;
     const texto = "Licenças Ativas";
     const status = "Aumentou 2% em Relação ao Mês Anterior";
     const seta = "moderateIncrease";
    
    return (
        <Card className="w-fit hover:shadow-lg">
            <div>
                <div>
                    <Image className='w-10 h-10' src={Icone} alt="Gráfico"/>
                </div>
                <Flex alignItems="start">
                    <div>
                        <Text>{texto}</Text>
                        <Metric className='mb-2.5'>{valor}</Metric>
                    </div>
                </Flex>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </div>
        </Card>
    );
};

// Defina os tipos das props utilizando PropTypes
LicencaAtiva.propTypes = {
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  };