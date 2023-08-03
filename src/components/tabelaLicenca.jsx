import React from "react";
import { Card, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const tabela = [
  {
    title: "Tabela de Custos por Licença",
    tipo: "Valor geral da Licença",
  },
];

export default function TabelaLicenca({ data }) {
  const dados = data?.valorTotalLicencasOrdenado ?? {};
  const valorTotal = Object.values(dados).reduce((soma, valor) => soma + valor, 0);
  const exibirDados = Object.keys(dados).map((licenca) => {
    return { name: licenca, amount: dados[licenca] };
  });
  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue", "lime", "slate"];

  return (
    <Grid numItemsSm={1} className="gap-6 w-full max-h-max">
      {tabela.map((dadosTabela) => (
        <Card key={dadosTabela.title} className="min-w-fit">
          <p className="font-bold">{dadosTabela.title}</p>
          <Text>{dadosTabela.tipo}</Text>

          <List className="mt-4 flex-col">
            {exibirDados.slice(0, 12).map((infoDado, index) => {
              const selectCores = corArray[index % corArray.length];
              return (
                <ListItem key={infoDado.name} style={{ marginBottom: "5px" }}>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="font-bold">{infoDado.name}</p>
                      <Text>{infoDado.amount.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</Text>
                    </div>
                    <ProgressBar value={(infoDado.amount / valorTotal) * 500} color={selectCores} className="mt-3" />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Card>
      ))}
    </Grid>
  );
}
