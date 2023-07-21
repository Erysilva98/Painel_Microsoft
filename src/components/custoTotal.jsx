"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grafico from "@assets/IconGrafico.svg";
import Image from 'next/image';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

export default function CustoTotal() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao obter os valores calculados:', error);
            }
        };

        fetchData();
    }, []);
    
    // Tratamento de dados para o componente Custo Total
    const valor = `R$ ${data?.mediaIdCustoLicenca || 0}`;
    const texto = "Custo Total";
    const status = "12% de Aumento em Relação ao Mês Anterior";
    const seta = "moderateIncrease";

    return (
        <Card className="w-fit">
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