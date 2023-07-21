"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [

  {
    tipo: "Office 365",
    "Office 365 E3": 15,
    "Enterprise Mobility": 5,
    "Security E3": 10,
    "Exchange Online (Plan 1 )": 4,
    "Microsoft Power Automate Free": 2,
    "Power BI (free)": 8,
    "Microsoft Teams Exploratory Mobility": 1,
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