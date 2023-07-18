"use client";
import React from "react";
import { Card, AreaChart, Title,} from "@tremor/react";

const dados = [
  {
    Month: "Jan",
    Sales: 7890,
    Profit: 4400,
  },
  {
    Month: "Feb",
    Sales: 4890,
    Profit: 5398,
  },
  {
    Month: "Març 21",
    Sales: 5890,
    Profit: 7398,
  },
  {
    Month: "Abr 21",
    Sales: 5690,
    Profit: 1398,
  },
  {
    Month: "Mai 21",
    Sales: 1890,
    Profit: 4398,
  },
  {
    Month: "Jun 21",
    Sales: 1890,
    Profit: 1398,
  },
];


export default function GraficoMensal() {

  return (
    <>
      <Card>
        <Title>Custo</Title>
        <AreaChart
          className="max-w-2xl max-h-64"
          data={dados}
          categories={["Sales", "Profit"]}
          index="Month"
          colors={["indigo", "fuchsia"]}
          yAxisWidth={60}
          valueFormatter={(number) =>
            `$ ${Intl.NumberFormat("pt-br").format(number).toString()}`
          }
        />
      </Card>
    </>
  );
}
