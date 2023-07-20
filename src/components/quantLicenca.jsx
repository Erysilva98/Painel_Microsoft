"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [

  {
    tipo: "Office 365",
    "Office 365 E3": 100,
    "Enterprise Mobility": 90,
    "Security E3": 80,
    "Exchange Online (Plan 1 )": 70,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 50,
    "Microsoft Teams Exploratory Mobility": 40,
  },
];

export default function QuantLicenca () {

  const categories = Object.keys(dados[0]).filter((key) => key !== "tipo");

  return (
    <Card>
      <Title>As Licenças mais Utilizadas (É possivel retorna s 10?)</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={dados}
        index="tipo"
        categories={categories}
        colors={["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]}
        yAxisWidth={48}
      />
    </Card>
  )
}