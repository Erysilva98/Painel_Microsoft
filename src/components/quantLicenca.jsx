import React from "react";
import { Card, Title, BarChart } from "@tremor/react";

export default function QuantLicenca({ data }) {
  const recebo = data.listarLicencaOrdenada;

  if (!recebo) return null;

  const selecionarLista = Object.entries(recebo)
    .slice(0, 10)
    .map(([tipo, quantidade]) => ({
      [tipo]: quantidade,
    }));

  const dados = {
    tipo: "Microsoft",
    ...Object.assign({}, ...selecionarLista),
  };

  const categories = Object.keys(dados).filter((key) => key !== "tipo");

  return (
    <Card>
      <Title>As Licenças mais Utilizadas</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={[dados]}
        index="tipo"
        categories={categories}
        colors={["amber","indigo","sky","rose","emerald","violet","yellow","blue","lime","slate",]}
        yAxisWidth={48}
      />
    </Card>
  );
}