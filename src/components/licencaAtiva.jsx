import React from 'react';
import Icone from "@assets/licencaIcon.svg";
import Image from 'next/image';
import Link from 'next/link';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";


const dados =
{
    valor: '3.100,00',
    texto: "Licenças Ativas",
    status: "2% de Redução em Relação ao Mês Anterior",
    seta: "moderateDecrease",
}

export default function Teste() {

    // Tratamento de dados para o componente Custo Total
    
    return (
        <Card className="w-fit">
            <div>
                <div>
                    <Image className='w-10 h-10' src={Icone} alt="Gráfico"/>
                </div>
                <Flex alignItems="start">
                    <div>
                        <Text>{dados.texto}</Text>
                        <Metric className='mb-2.5'>{dados.valor}</Metric>
                    </div>
                </Flex>
                <BadgeDelta deltaType={dados.seta}>{dados.status}</BadgeDelta>
            </div>
        </Card>
    );
};
