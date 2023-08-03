import { Card, Title, BarChart} from "@tremor/react";

const dados = [

  {
    tipo: "Microsoft", 
    "Office 365 E3": 107,
    "Enterprise Mobility": 82,
    "Security E3": 82,
    "Microsoft Power Automate Free": 26,
    "Exchange Online (Plan 1)": 12,
    "Power BI (free)": 5,
    "Microsoft Teams Exploratory": 2,
    "Azure Active Directory Premium P1": 54,
    "Dynamics 365 Customer Insights Self-Service Trial": 10,
    "Dynamics 365 Customer Insights vTrial": 10,
    "Dynamics 365 Customer Service Enterprise vTrial": 10,
    "Dynamics 365 Customer Voice Trial": 10,
  },
];

export default function QuantLicenca () {

  const categories = Object.keys(dados[0]).filter((key) => key !== "tipo");

  return (
    <Card>
      <Title>As Licenças mais Utilizadas</Title>
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