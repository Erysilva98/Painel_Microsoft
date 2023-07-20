"use client";
import React from "react";
import { Card, AreaChart, Title,} from "@tremor/react";

const dados = [
  {
    Month: "01 Jan",
    Atual: 4000,
    Anterior: 12800,
  },
  {
    Month: "01 Feb",
    Atual: 23400,
    Anterior: 18000,
  },
  {
    Month: "01 Marc",
    Atual: 24670,
    Anterior: 21580,
  },
  {
    Month: "01 Abr",
    Atual: 28000,
    Anterior: 23980,
  },
  {
    Month: "01 Mai",
    Atual: 17100,
    Anterior: 13980,
  },
  {
    Month: "01 Jun",
    Atual: 17600,
    Anterior: 12980,
  },
  {
    Month: "01 Jul",
    Atual: 20000,
    Anterior: 19080,
  },
  {
    Month: "01 Ago",
    Atual: 24100,
    Anterior: 29080,
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
