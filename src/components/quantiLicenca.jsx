"use client";
import { Card, Title, BarChart} from "@tremor/react";

const dados = [
  {
    name: "licenca",
    "Microsoft Office 365 E3": 1850,
    "Microsoft EMS E3": 350,
    "Microsoft Exchange P1": 700,
    "Lorem Ipsum": 450,
  }
];

const dataFormatter = (number) => {
  return "" + Intl.NumberFormat("pt-br").format(number).toString();
};

export default function QuantidLicenca () {
  return (
    <Card>
      <Title>Licenças</Title>
      <BarChart
        className="max-w-2xl max-h-72 justify-center"
        data={dados}
        index="licenca"
        categories={["Microsoft Office 365 E3", "Microsoft EMS E3", "Microsoft Exchange P1", "Lorem Ipsum"]}
        colors={["amber", "indigo", "sky", "rose"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  )
}