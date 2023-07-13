import React from 'react';
import Link from 'next/link';
import { Card, Flex, Metric, Text } from "@tremor/react";

const dados =
{
    numero: 3000,
}

export default function CustoUsuario() {

  return (
    <Card className="max-w-lg mx-auto my-auto">
        <Link href="/licenca">
            <Flex alignItems="start">
                <div>
                    <Text>Usuário</Text>
                    <Metric>{dados.numero}</Metric>
                </div>
            </Flex>
            
        </Link>
    </Card>
  );
}