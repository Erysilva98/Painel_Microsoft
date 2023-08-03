"use client";
import React from "react";
import { Title, BarChart } from "@tremor/react";

export default function QuantLicenca({ data }) {
  const dados = data.listarLicencaOrdenada;
  const categories = Object.keys(dados).filter((key) => key !== "tipo");
  const selecionarLista = categories.slice(0, 10);
  console.log("selecionarLista",selecionarLista);

  // Criar um novo objeto com os 10 primeiros itens da lista ordenada
  const exibirDados = selecionarLista.map((licenca) => {
    return { tipo: licenca, [licenca]: dados[licenca] };
  });
  console.log("dados",exibirDados);
  return (
    <div className="bg-white rounded-xl">
      <Title className="ml-3 mt-3">As Licenças mais Utilizadas</Title>
      <BarChart
        className="w-full pl-2 pr-2 max-h-64"
        data={exibirDados}
        index="tipo"
        categories={selecionarLista}
        colors={[
          "amber",
          "indigo",
          "sky",
          "rose",
          "emerald",
          "violet",
          "yellow",
          "blue",
          "lime",
          "slate",
        ]}
        yAxisWidth={48}
      />
    </div>
  );
}
