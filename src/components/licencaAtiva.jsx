"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

//Icones 
import Icone from "@assets/licencaIcon.svg";

export default function LicencaAtiva() {
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

    const dados = {
        valor: `${(data?.quantidadeNomeExibicao || 0)}`,
        texto: "Licenças Ativas",
        status: "Aumentou 2% em Relação ao Mês Anterior",
        seta: "moderateIncrease",
    }
    
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
