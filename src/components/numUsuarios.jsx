import React from 'react';
import { Badge, Card, Metric } from '@tremor/react';

export default function NumUsuarios({ data }) {

  if (!data) return null;

  const numero = `${(data?.quantidadeUsuarios || 0)}`;

  let status = data?.diferencaLicecasAtuaisEAnteriores;
  let badgeCor = "";

  // Formatação do componente Badge
  if (status !== 0) {
    if (status < 0) {
      status = `${Math.abs(status).toFixed(2)}% de Redução `;
      badgeCor = "teal";
    }
    else {
      status = `${Math.abs(status).toFixed(2)}% de Aumento `;
      badgeCor = "red";
    }

  } else {
    status = "Estável";
  }


  return (
    <Card className="w-80 h-28 hover:shadow-lg">
      <div>
        <div className='flex flex-col'>
          <p>Número de Usuários</p>
          <div className='flex flex-row space-x-4'>
            <Metric>{numero}</Metric>
            <Badge className='text-xs'>{status}</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}