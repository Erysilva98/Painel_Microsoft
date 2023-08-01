"use client";
import React from 'react';
import Image from 'next/image';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

// Imagens
import Grafico from "@assets/IconGrafico.svg";

export default function CustoTotal({data}) {
    
    // Tratamento de dados para o componente Custo Total
    const valor = `R$ ${data?.mediaIdCustoLicenca || 0}`;
    const texto = "Custo Total";
    const status = "12% de Aumento em Relação ao Mês Anterior";
    const seta = "moderateIncrease";

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Grafico} alt="Gráfico" />
                </div>
                    <div>
                        <span>{texto}</span>
                        <Metric className='mb-2.5'>{valor}</Metric>
                    </div>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </div>
        </div>
    );
}
