import React from 'react';
import Link from 'next/link';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Teste() {
  const dados = {
    numero: 3000,
    status: 12 + '%',
  };

  return (
    <Card className="max-w-lg mx-auto my-auto">
      <Link href="/licenca">
        <div className='flex flex-col'>
        <Text>Usuários</Text>
            <div className='flex flex-row space-x-4'>
                <Metric>{dados.numero}</Metric>
                <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                    {dados.status}
                </BadgeDelta>
            </div>
        </div>
      </Link>
    </Card>
  );
}
