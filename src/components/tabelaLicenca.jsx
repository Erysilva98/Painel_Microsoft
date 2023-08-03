import React from "react";
import { Card, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const dados = [
  {
    name: "Office 365 E3",  amount: 3000,
  },
  {
    name:  "Enterprise Mobility", amount: 2500,
  }, 
  {
    name: "Security E3", amount: 2800,
  },
  {
    name: "Exchange Online (Plan 1 )", amount: 1200,
  },
  {
    name: "Microsoft Power Automate Free", amount: 2370,
  },
  {
    name: "Power BI (free)", amount: 1000,
  }, 
  {
    name: "Microsoft Teams Exploratory Mobility", amount: 800,
  },
  {
    name: "Microsoft 365 Business Basic", amount: 1800,
  },
  {
    name: "Windows 10 Enterprise E3", amount: 3200,
  },
  {
    name: "Microsoft 365 E5", amount: 5200,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande", amount: 1500,
  },
  {
    name: "SharePoint Online (Plan 2)", amount: 6800,
  },
  {
    name: "Microsoft Power Apps Per User", amount: 900,
  },
  // Adicione mais licenças fictícias abaixo
  {
    name: "Microsoft 365 E5", amount: 420.0,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande", amount: 150.0,
  },
  {
    name: "SharePoint Online (Plan 2)", amount: 9800,
  },
  {
    name: "Microsoft Power Apps Per User", amount: 900,
  },
  {
    name: "Microsoft 365 E5", amount: 4200,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande", amount: 1500,
  },
  {
    name: "SharePoint Online (Plan 2)", amount: 1800,
  },
  {
    name: "Microsoft Power Apps Per User", amount: 900,
  },
  {
    name: "Microsoft 365 E5", amount: 4200,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande", amount: 1500,
  },
  {
    name: "SharePoint Online (Plan 2)", amount: 1800,
  },
  {
    name: "Microsoft Power Apps Per User", amount: 900,
  },
  {
    name: "Microsoft 365 E5", amount: 4200,
  },
  {
    name: "Microsoft teste de nome grande muito grande", amount: 1500,
  },
  {
    name: "SharePoint ine (Plan 2)", amount: 1800,
  },
  {
    name: "Microsoft Apps Per User", amount: 900,
  },
  {
    name: "Microsoft 5 E5", amount: 4200,
  },
  {
    name: "Microsoft licen teste de muito grande", amount: 1500,
  },
  {
    name: "SharePoint (P2)", amount: 1840,
  },
  {
    name: "Microsoft Power As Per User", amount: 1200,
  },
  {
    name: "Microsoft 365 E5", amount: 1220,
  },
  {
    name: "Microsoft licenca teste de ", amount: 1250,
  },
  {
    name: "SharePoint Online )", amount: 1800,
  },
  {
    name: "Microsoft Power Apps ", amount: 1100,
  },
  {
    name: "Microsoft 365 E5", amount: 4200,
  },
  {
    name: "Microsoft licenca teste de nome grande muito grande", amount: 1500,
  },
  {
    name: "SharePoint Online (Plan 2)", amount: 1000,
  },
];

const tabela = [
  {
    title: "Tabela de Custos por Licença",
    tipo: "Valor geral da Licença",
  },
];

export default function TabelaLicenca() {
  const ordernaDados = dados.sort((a, b) => b.amount - a.amount);
  const dadosOrdenados = ordernaDados;
  const valorTotal = dados.reduce((soma, valor) => soma + valor.amount, 0);

  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]; 

  return (
    <Grid numItemsSm={1} className="gap-6 w-full max-h-max">
      {tabela.map((dadosTabela) => (
        <Card key={dadosTabela.title} className="min-w-fit">
          <p className="font-bold">{dadosTabela.title}</p>
          <Text>{dadosTabela.tipo}</Text>

          <List className="mt-4 flex-col">
          {dadosOrdenados.slice(0,12).map((infoDado, index) => {
                const selectCores = corArray[index % corArray.length];
                return (
                  <ListItem key={infoDado.name} style={{ marginBottom: '5px' }}>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <p className="font-bold">{infoDado.name}</p>
                        <Text>{infoDado.amount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
                      </div>
                      <ProgressBar
                        value={ (infoDado.amount / valorTotal) * 500} 
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
