import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const dados = [
  {
    name: "Microsoft test2",
    amount: 12000.0,
  },
  {
    name: "Microsoft Exchange E3",
    amount: 15000.0,
  }, 
  {
    name: "Microsoft Exchange E3",
    amount: 5000.0,
  },
  {
    name: "Microsoft Exchange E3",
    amount: 15000.0,
  },{
    name: "Microsoft Exchange E3",
    amount: 15000.0,
  },{
    name: "Microsoft Exchange E3",
    amount: 15000.0,
  }, 
];

const tabela = [
  {
    title: "Custo total por Licença",
    tipo: "Valor geral da Licença",
  },
];

export default function TabelaLicenca() {

  const ordernaDados = [...dados].sort((a, b) => b.amount - a.amount);
  const dadosOrdenados = [...ordernaDados].slice(0, 5);
  const valorTotal = [...dados].reduce((soma, valor) => soma + valor.amount, 0);

  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {tabela.map((dados) => (
        <Card key={dados.title} style={{ width: '325px', height: 'fit-content'}}>
          <p className="font-bold">{dados.title}</p>
          <Text>{dados.tipo}</Text>

          <List className="mt-4">
            {dadosOrdenados.map((infoDado) => (
              <ListItem key={infoDado.name} style={{ marginBottom: '25px' }}>
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-bold">{infoDado.name}</p>
                    <Text>{"R$"+infoDado.amount}</Text>
                  </div>
                  <ProgressBar
                    value={(infoDado.amount /valorTotal * 200)}
                    color={"amber", "indigo", "sky", "rose"}
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
