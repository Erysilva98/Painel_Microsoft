"use client";
import React from "react";
import { Card, Title, LineChart } from "@tremor/react";

export default function GraficoMensal({ data }) {
  if (!data.calcularHistoricoCustoTotalAno) return null;

  const calcularHistoricoCustoTotalAno = data.calcularHistoricoCustoTotalAno;

  const tratarDados = (dados) => {
    const exibirDados = [];

    for (const ano in dados) {
      const dadosAno = dados[ano];
      const dadosMeses = Array.from({ length: 12 }, (_, index) => {
        const mes = index + 1;
        const dadoMesAtual = dadosAno.find((dado) => dado.mes === mes);
        const dadoMesAnterior = dadosAno.find((dado) => dado.mes === mes - 1);

        return {
          Month: `${mes.toString().padStart(2, '0')}`,
          Atual: dadoMesAtual ? dadoMesAtual.Total : 0,
          Anterior: dadoMesAnterior ? dadoMesAnterior.Total : 0,
        };
      });

      exibirDados.push(...dadosMeses);
    }

    return exibirDados;
  };

  const dadosTratados = tratarDados(calcularHistoricoCustoTotalAno);

  const dataFormatter = (number) => `${Intl.NumberFormat("pt-br").format(number).toString()}`;

  return (
    <Card>
      <Title>Custo Total das Licenças por Mês</Title>
      <LineChart
        className="mt-6"
        data={dadosTratados}
        index="Month"
        categories={["Atual", "Anterior"]}
        colors={["indigo", "fuchsia"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
    </Card>
  );
}
