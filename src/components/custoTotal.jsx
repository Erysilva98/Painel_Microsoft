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
        <Card className="w-fit hover:shadow-lg">
            <div>
                <div>
                    <Image className='w-10 h-10' src={Grafico} alt="Gráfico" />
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
}
