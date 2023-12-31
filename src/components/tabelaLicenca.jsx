import React from "react";
import { Card, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const tabela = [
  {
    title: "Custo Total por Licenças",
  },
];

export default function TabelaLicenca({ data }) {

  if (!data) return null;

  const dados = data?.valorTotalLicencasOrdenado ?? {};
  const valorTotal = Object.values(dados).reduce((soma, valor) => soma + valor, 0);

  // Ordenar as chaves (nomes de licenças) alfabeticamente
  const licencasOrdenadas = Object.keys(dados);

  const exibirDados = licencasOrdenadas.map((licenca) => {
    return { name: licenca, amount: dados[licenca] };
  });

  // Array de cores para a barra de progresso
  const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue", "lime", "slate"];

  return (
    <Grid numItemsSm={1} className="gap-6 w-full max-h-max">
      {tabela.map((dadosTabela) => (
        <Card key={dadosTabela.title} className="min-w-fit">
          <p className="font-bold">{dadosTabela.title}</p>

          <List className="mt-4 flex-col">
            {exibirDados.slice(0, 12).map((infoDado, index) => {
              const selectCores = corArray[index % corArray.length];
              return (
                <ListItem key={infoDado.name} style={{ marginBottom: "5px" }}>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="font-bold">{infoDado.name}</p>
                      <p>{infoDado.amount.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
                    </div>
                    {/* Barra de Progresso */}
                    <ProgressBar value={(infoDado.amount / valorTotal) * 100} color={selectCores} className="mt-3" />
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
