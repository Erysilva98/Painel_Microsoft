"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [

  {
    tipo: "Office 365",
    "Microsoft Office 365 E3": 1350,
    "Microsoft Office EMS E3": 900,
    "Microsoft Exchange P1": 500,
    "Lorem Ipsum": 1000,
  },
];

export default function QuantLicenca () {

  const categories = Object.keys(dados[0]).filter((key) => key !== "tipo");

  return (
    <Card>
      <Title>Licenças</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={dados}
        index="tipo"
        categories={categories}
        colors={["amber", "indigo", "sky", "rose"]}
        yAxisWidth={48}
      />
    </Card>
  )
}