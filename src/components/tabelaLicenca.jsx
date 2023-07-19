import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const dados = [
  {
    name: "Microsoft Office365 E3",
    share: 70,
    amount: "R$11,715",
    cor: "amber"
  },
  {
    name: "Microsoft EMS E3",
    share: 30,
    amount: "R$8,269",
    cor: "indigo"
  },
  {
    name: "Microsoft Exchange P1",
    share: 55,
    amount: "R$3,790",
    cor: "sky"
  },
  {
    name: "Loren ipsum",
    share: 45,
    amount: "R$3,445",
    cor: "rose"
  },
];

const tabela = [
  {
    title: "Licenças",
    tipo: "Valor geral da Licença",
    data: dados,
    cor: "amber"
  },
];

export default function TabelaLicenca() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {tabela.map((dados) => (
        <Card key={dados.title} style={{ width: '325px', height: '365px'}}>
          <p className="font-bold">{dados.title}</p>
          <Text>{dados.tipo}</Text>

          <List className="mt-4">
            {dados.data.map((infoDado) => (
              <ListItem key={infoDado.name} style={{ marginBottom: '25px' }}>
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-bold">{infoDado.name}</p>
                    <Text>{infoDado.amount}</Text>
                  </div>
                  <ProgressBar
                    value={infoDado.share}
                    color={infoDado.cor}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  );
}
