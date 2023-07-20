"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [

  {
    tipo: "Office 365",
    "Microsoft Office 365 E3": 100,
    "Microsoft Office EMS E3": 90,
    "Microsoft Exchange P1": 80,
    "Test4": 70,
    "Test5": 60,
    "Test6": 50,
    "Test7": 40,
    "Test8": 30,
    "Test9": 20,
    "Test10": 10,
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