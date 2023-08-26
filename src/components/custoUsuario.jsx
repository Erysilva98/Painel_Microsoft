import React from "react";
import { Card, Metric, Badge } from "@tremor/react";

export default function CustoUsuario({ data }) {
  if (!data) return null;

  // Tratamento de dados para o formato de moeda Brasil
  const valor = parseFloat(data?.valorMedioPorUsuario || 0).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minFracionar: 2,
      maxFracionar: 2,
    }
  );

  // Tratamento de dados para o componente BadgeDelta
  let status = data?.diferencaUsuarioAtualComPassado || 0;
  let badgeCor = "";
  // Formatação do componente Badge
  if (status !== 0) {
    if (status < 0) {
      status = `${Math.abs(status).toFixed(2)}% de Redução`;
      badgeCor = "teal";
    } else {
      status = `${Math.abs(status).toFixed(2)}% de Aumento`;
      badgeCor = "red";
    }
  } else {
    status = "Estável";
    badgeCor = "gray";
  }

  return (
    <Card className="w-80 h-28 hover:shadow-lg">
      <div>
        <div className="flex flex-col">
          <p>Valor Médio por Usuário</p>
          <div className="flex space-x-3">
            <Metric>{valor}</Metric>
            <Badge className="text-xs" color={badgeCor}>{status}</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
