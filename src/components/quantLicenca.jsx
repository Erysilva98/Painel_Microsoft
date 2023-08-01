"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [
  {
    tipo: "Office 365",
    "Office 365 E3": 140,
    "Enterprise Mobility": 50,
    "Security E3": 105,
    "Exchange Online (Plan 1 )": 40,
    "Microsoft Power Automate Free": 20,
    "Power BI (free)": 80,
    "Microsoft Teams Exploratory Mobility": 150,
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    // novas licenças
    "teste": 10,
  },
];

export default function QuantLicenca () {

  const categories = Object.keys(dados[0]).filter((key) => key !== "tipo");

  return (
    <div className="bg-white rounded-xl">
      <Title className="ml-3 mt-3">As Licenças mais Utilizadas</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={dados}
        index="tipo"
        categories={categories}
        colors={["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]}
        yAxisWidth={48}
      />
    </div>
  )
}