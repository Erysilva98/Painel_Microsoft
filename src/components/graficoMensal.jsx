"use client";
import React from "react";
import { Card, AreaChart, Title,} from "@tremor/react";

const dados = [
  {
    Month: "01 Jan",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Feb",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Marc",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Abr",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Mai",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Jun",
    Atual: 1505.0,
    Anterior: 1070.0,
  },
  {
    Month: "01 Jul",
    Atual: 1659.9,
    Anterior: 1505.0,
  },
  {
    Month: "01 Ago",
    Atual: 0,
    Anterior: 0,
  },
  {
    Month: "01 Set",
    Atual: 0,
    Anterior: 0,
  },
];


export default function GraficoMensal() {

  return (
      <Card>
        <Title>Custo Mensal</Title>
        <AreaChart
          className="max-w-2xl max-h-64"
          data={dados}
          categories={["Atual", "Anterior"]}
          index="Month"
          colors={["indigo", "fuchsia"]}
          yAxisWidth={60}
          valueFormatter={(number) =>
            `${Intl.NumberFormat("pt-br").format(number).toString()}`
          }
        />
      </Card>
  );
}
