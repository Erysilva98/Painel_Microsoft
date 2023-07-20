import React from "react";
import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const dados = [
  {
    name: "Microsoft Office 365 E3",
    amount: 1000.0,
  },
  {
    name:  "Microsoft Office EMS E3",
    amount: 900.0,
  }, 
  {
    name: "Microsoft Exchange P1",
    amount: 800.0,
  },
  {
    name: "Test4",
    amount: 700.0,
  },
  {
    name: "Test5",
    amount: 600.0,
  },
  {
    name: "Test6",
    amount: 500.0,
  }, 
  {
    name: "Test7",
    amount: 400.0,
  },
  {
    name: "Test8",
    amount: 300.0,
  },
  {
    name: "Test9",
    amount: 200.0,
  },
  {
    name: "Test10",
    amount: 100.0,
  },
];

const tabela = [
  {
    title: "Custo total por Licença",
    tipo: "Valor geral da Licença",
  },
];


export default function TabelaLicenca() {

  const ordernaDados = dados.sort((a, b) => b.amount - a.amount);
  const dadosOrdenados = ordernaDados.slice(0, 5);
  const valorTotal = dados.reduce((soma, valor) => soma + valor.amount, 0);

  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue" , "lime", "slate"]; 

  return (
    <Grid numItemsSm={1} className="gap-6">
      {tabela.map((dadosTabela) => (
        <Card key={dadosTabela.title} style={{ width: '325px', height: 'fit-content'}}>
          <p className="font-bold">{dadosTabela.title}</p>
          <Text>{dadosTabela.tipo}</Text>

          <List className="mt-4">
            {dadosOrdenados.map((infoDado, index) => {
                const selectCores = corArray[index % corArray.length];
                return (
                  <ListItem key={infoDado.name} style={{ marginBottom: '25px' }}>
                    <div className="w-full">
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
