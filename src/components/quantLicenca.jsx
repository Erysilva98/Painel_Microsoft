import React from "react";
import { Card, Title, BarChart } from "@tremor/react";

export default function QuantLicenca( {data}) {
  const recebo = data.listarLicencaOrdenada || {};

  if (!recebo) return null;

  // Obter os 10 primeiros itens 
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

  const colorList = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue", "lime", "slate"];

  return (
    <Card>
      <Title>Licenças mais Utilizadas</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={[dados]}
        index={"tipo"}
        categories={categories}
        colors={colorList.map((color) => color)}
        yAxisWidth={48}
      />
    </Card>
  );
}