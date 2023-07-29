import React from "react";
import { Card, Title } from "@tremor/react";

const dados = [
  {
    month: "Jan",
    "Office 365 E3": 100,
    "Enterprise Mobility": 150,
    "Security E3": 75,
    "Exchange Online (Plan 1)": 200,
    "Microsoft Power Automate Free": 50,
    "Power BI (free)": 120,
    "Microsoft Teams Exploratory Mobility": 80,
  },
  {
    month: "Feb",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Mar",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Abr",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Mai",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Jun",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Jul",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Ago",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Set",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Out",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Nov",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  {
    month: "Dez",
    "Office 365 E3": 120,
    "Enterprise Mobility": 180,
    "Security E3": 90,
    "Exchange Online (Plan 1)": 220,
    "Microsoft Power Automate Free": 60,
    "Power BI (free)": 140,
    "Microsoft Teams Exploratory Mobility": 100,
  },
  // Adicione mais meses com seus respectivos valores...
];

export default function LicencaMensal() {
  const nomesLicencas = Object.keys(dados[0]).filter((key) => key !== "month");
  const meses = dados.map((item) => item.month);

  // Array de cores predefinido
  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue", "lime", "slate"];

  // Objeto que associa cada licença a uma cor
  const corPorLicenca = nomesLicencas.reduce((obj, licenca, index) => {
    obj[licenca] = corArray[index % corArray.length];
    return obj;
  }, {});

  return (
    <Card>
      <Title>Variações do Preço das Licenças</Title>
      <table className="table-auto mt-6">
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
            {meses.map((mes) => (
              <th key={mes} className="px-4 py-2">
                {mes}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {nomesLicencas.map((nomeLicenca) => (
            <tr key={nomeLicenca}>
              <td className="border">{nomeLicenca}</td>
              {meses.map((mes) => (
                <td
                  key={mes}
                  className={`border ${corPorLicenca[nomeLicenca]}`} // Utiliza a cor correspondente à licença
                >
                  {dados.find((item) => item.month === mes)[nomeLicenca]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
