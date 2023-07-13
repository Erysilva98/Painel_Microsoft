import React from 'react';
import Grafico from "@assets/IconGrafico.svg";
import Image from 'next/image';
import Link from 'next/link';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

export default function CustoTotal() {

    // Tratamento de dados para o componente Custo Total
    const valor = 'R$ 3.600,00';
    const texto = "Custo Total";
    const status = "12% de Aumento em Relação ao Mês Anterior"; 

    return (
        <Card className="max-w-lg mx-auto my-auto">
            <Link href="/distribuidora">
                <div>
                    <Image className='w-10 h-10' src={Grafico} alt="Gráfico"/>
                </div>
                <Flex alignItems="start">
                    <div>
                        <Text>{texto}</Text>
                        <Metric>{valor}</Metric>
                    </div>
                </Flex>
                <BadgeDelta deltaType="moderateIncrease">{status}</BadgeDelta>
            </Link>
        </Card>
    );
};
