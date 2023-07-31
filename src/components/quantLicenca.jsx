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
    "teste2": 20,
    "teste3": 30,
    "teste4": 40,
    "teste5": 50,
    "teste6": 60,
    "teste7": 70,
    "teste8": 80,
    "teste9": 90,
    "teste10": 100,
    "teste11": 110,
    "teste12": 120,
    "teste13": 130,
    "teste14": 140,
    "teste15": 150,
    "teste16": 160,
    "teste17": 170,
    "teste18": 180,
    "teste19": 190,
    "teste20": 200,    
  },
];

export default function QuantLicenca () {

  const categories = Object.keys(dados[0]).filter((key) => key !== "tipo");

  return (
    <Card>
      <Title>As Licenças mais Utilizadas</Title>
      <BarChart
        className="h-60 justify-center"
        data={dados}
        index="tipo"
        categories={categories}
        colors={["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]}
        yAxisWidth={48}
      />
    </Card>
  )
}