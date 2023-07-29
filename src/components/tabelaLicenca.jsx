import React from "react";
import { Card, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const dados = [
  {
    name: "Office 365 E3",
    amount: 300.0,
  },
  {
    name:  "Enterprise Mobility",
    amount: 250.0,
  }, 
  {
    name: "Security E3",
    amount: 280.0,
  },
  {
    name: "Exchange Online (Plan 1 )",
    amount: 120.0,
  },
  {
    name: "Microsoft Power Automate Free",
    amount: 237.0,
  },
  {
    name: "Power BI (free)",
    amount: 100.0,
  }, 
  {
    name: "Microsoft Teams Exploratory Mobility",
    amount: 80.0,
  },
  {
    name: "Microsoft 365 Business Basic",
    amount: 180.0,
  },
  {
    name: "Windows 10 Enterprise E3",
    amount: 320.0,
  },
  {
    name: "Microsoft 365 E5",
    amount: 420.0,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande",
    amount: 150.0,
  },
  {
    name: "SharePoint Online (Plan 2)",
    amount: 180.0,
  },
  {
    name: "Microsoft Power Apps Per User",
    amount: 90.0,
  },
  // Adicione mais licenças fictícias abaixo
  // ...
];

const tabela = [
  {
    title: "Custo total por Licença",
    tipo: "Valor geral da Licença",
  },
];

export default function TabelaLicenca() {
  const ordernaDados = dados.sort((a, b) => b.amount - a.amount);
  const dadosOrdenados = ordernaDados.slice(0, 10);
  const valorTotal = dados.reduce((soma, valor) => soma + valor.amount, 0);
  console.log(valorTotal);

  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]; 

  return (
    <Grid numItemsSm={1} className="gap-6">
      {tabela.map((dadosTabela) => (
        <Card key={dadosTabela.title} style={{ width: '325px', height: 'fit-content'}}>
          <p className="font-bold">{dadosTabela.title}</p>
          <Text>{dadosTabela.tipo}</Text>

          <List className="mt-4 w-full flex flex-col">
            {dadosOrdenados.map((infoDado, index) => {
                const selectCores = corArray[index % corArray.length];
                return (
                  <ListItem key={infoDado.name} style={{ marginBottom: '5px' }}>
                    <div className="w-fit">
                      <div className="flex justify-between">
                        <p className="font-bold">{infoDado.name}</p>
                        <Text>{"R$" + infoDado.amount}</Text>
                      </div>
                      <ProgressBar
                        value={ (infoDado.amount / valorTotal) * 100} 
                        color={selectCores} 
                        className="mt-3"   
                      />
                    </div>
                  </ListItem>
                )
            })}
          </List>
        </Card>
      ))}
    </Grid>
  );
}
