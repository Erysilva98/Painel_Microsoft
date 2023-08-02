import React from "react";
import { ProgressBar, Card, Flex, Text, Metric, TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";

const dados = [
  { ano: 2017, nome: "Microsoft", custo: 100.0 },
  { ano: 2018, nome: "Microsoft", custo: 100.0 },
  { ano: 2019, nome: "Microsoft", custo: 100.0 },
  { ano: 2020, nome: "Microsoft", custo: 200.0 },
  { ano: 2021, nome: "Outra Empresa", custo: 150.0 },
  { ano: 2022, nome: "Painel", custo: 100.0 },
  { ano: 2023, nome: "0", custo: 100.0 },
  { ano: 2023, nome: "1", custo: 700 },
  { ano: 2023, nome: "2", custo: 100.0 },
  { ano: 2023, nome: "3", custo: 100.0 },
  { ano: 2023, nome: "4", custo: 100.0 },
  { ano: 2023, nome: "5", custo: 100.0 },
  { ano: 2023, nome: "6", custo: 100.0 },
  // Adicione outros dados semelhantes aqui
];

function selecionarAno(ano) {
  return dados.filter((item) => item.ano === ano);
}

function ordenarAno() {
  const lista = dados.map((item) => item.ano);
  const ordenarLista = [...new Set(lista)].sort((a, b) => b - a);
  return ordenarLista.slice(0, 5);
}

export default function CustoAnual() {
  const anoList = ordenarAno();

  return (
    <Card>
      <Text>Custo Anual por Licenças</Text>
      <TabGroup>
        <TabList className="mt-8">
          {anoList.map((ano) => (
            <Tab key={ano}>{ano}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {anoList.map((ano) => (
            <TabPanel key={ano}>
              <div className="mt-10">
                {selecionarAno(ano).slice(0,5).map((item) => (
                  <div key={item.nome} className="mt-4">
                    <Flex>
                      <Text className="w-full">{item.nome}</Text>
                      <Flex className="space-x-2" justifyContent="end">
                        <Text>{`$ ${item.custo}`}</Text>
                      </Flex>
                    </Flex>
                    <ProgressBar value={100} className="mt-2" />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  );
}
