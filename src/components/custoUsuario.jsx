import React from 'react';
import Link from 'next/link';
import { Card, Flex, Metric, Text, BadgeDelta } from "@tremor/react";

export default function CustoUsuario() {
    const dados = {
      numero: 'R$'+103.44,
      status: "moderateDecrease",
      valor: 18.7 + '%',
    };
  
    return (
      <Card className="w-64 h-28">
        <Link href="/licenca">
          <div className='flex flex-col'>
            <Text>Valor médio por usuário</Text>
            <div className='flex flex-row space-x-2'>
              <Metric>{dados.numero}</Metric>
              <BadgeDelta deltaType={dados.status} isIncreasePositive={true} size="xs">
                {dados.valor}
              </BadgeDelta>
            </div>
          </div>
        </Link>
      </Card>
    );
  }