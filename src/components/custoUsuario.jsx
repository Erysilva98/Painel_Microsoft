import React from 'react';
import { Card, Metric, Text, BadgeDelta } from "@tremor/react";

export default function CustoUsuario({ data }) {

  const numero = `${(data?.valorMedioPorUsuario || 0)}`;

  // Tratamento de dados para o componente BadgeDelta
  let status = data?.diferencaUsuarioAtualComPassado || 0;
  let seta = status > 0 ? "moderateIncrease" : status < 0 ? "moderateDecrease" : "unchanged";

  // Texto do componente BadgeDelta
  if (status !== 0) {
    status = `${Math.abs(status).toFixed(2)}% ${status >= 0 ? "%" : "%"}`;
  } else {
    status = "ESTÁVEL";
  }

  return (
    <Card className="w-80 h-28 hover:shadow-lg">
      <div>
        <div className='flex flex-col'>
          <Text>Valor médio por usuário</Text>
          <div className='flex space-x-3'>
            <Metric>R$ {numero}</Metric>
            <BadgeDelta deltaType={seta} size="xs">
              {status}
            </BadgeDelta>
          </div>
        </div>
      </div>
    </Card>
  );
}
