import React from 'react';
import Link from 'next/link';
import {BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const dados =
{
    numero: 3000,
    status: +12,
}

export default function Teste() {

    // Tratamento de dados para o componente Custo Total
    
    return (
        <Card className="max-w-lg mx-auto my-auto">
            <Link href="/licenca">
                <Flex alignItems="start">
                    <div>
                        <Text>Usuário</Text>
                        <Metric>{dados.numero}</Metric>
                        <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                            {dados.status}
                        </BadgeDelta>
                    </div>
                </Flex>
            </Link>
        </Card>
    );
};
