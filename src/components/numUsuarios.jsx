import React from 'react';
import { BadgeDelta, Card, Metric, Text } from '@tremor/react';

export default function NumUsuarios({ data }) {

  const numero = `${(data?.quantidadeUsuarios || 0)}`;
  let status = data?.diferencaLicecasAtuaisEAnteriores;
  let seta = status > 0 ? "moderateIncrease" : status < 0 ? "moderateDecrease" : "unchanged";

  // Texto do componente BadgeDelta
  if (status !== 0) {
    status = `${Math.abs(status).toFixed(2)}%`;
  } else {
    status = "ESTÁVEL";
  }

  return (
    <Card className="w-80 h-28 hover:shadow-lg">
      <div>
        <div className='flex flex-col'>
          <Text>Usuários</Text>
          <div className='flex flex-row space-x-4'>
            <Metric>{numero}</Metric>
            <BadgeDelta deltaType={seta} size="xs">
              {status} 
            </BadgeDelta>
          </div>
        </div>
      </div>
    </Card>
  );
}