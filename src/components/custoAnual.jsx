import React from "react";
import { ProgressBar, Card, Flex, Text, TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";

export default function CustoAnual({data}) {
  
  if (!data.licencasPorAno) return null;

  // Função para selecionar a lista da Api 
  const licencasPorAno = data.licencasPorAno;

  // Função para ordenar
  function ordenarPorAno(data) {
    const lista = data.map((item) => item.ano);
    const ordenarLista = [...new Set(lista)].sort((a, b) => b - a);
    return ordenarLista.slice(0, 5);
  }

  // Função para selecionar oa dados por ano
  function selecionarAno(data, ano) {
    return data.filter((item) => item.ano === ano);
  }

  const anoList = ordenarPorAno(licencasPorAno);


  return (
    <Card className="mb-36">
      <Text>Custo Anual por Licenças</Text>
      <TabGroup>
        <TabList className="mt-8">
          {anoList.map((ano) => (
            <Tab key={ano}>{ano}</Tab>
          ))}
        </TabList>
        <TabPanels >
          {anoList.map((ano) => (
            <TabPanel key={ano}>
              <div className="mt-10">
                {selecionarAno(licencasPorAno, ano).slice(0,5).map((item) => (
                  <div key={item.nome} className="mt-4">
                    <Flex>
                      <Text className="w-full">{item.nome}</Text>
                      <Flex className="space-x-2" justifyContent="end">
                        <Text>{`${item.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`}</Text>
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
