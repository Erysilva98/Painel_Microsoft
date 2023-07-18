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
    const seta = "moderateIncrease";

    return (
        <Card className="w-fit">
            <Link href="/distribuidora">
                <div>
                    <Image className='w-10 h-10' src={Grafico} alt="Gráfico"/>
                </div>
                <Flex alignItems="start">
                    <div>
                        <Text>{texto}</Text>
                        <Metric className='mb-2.5'>{valor}</Metric>
                    </div>
                </Flex>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </Link>
        </Card>
    );
};
