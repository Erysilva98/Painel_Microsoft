"use client";
import React from "react";
import { ProgressBar, Card, Flex, Text, TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";

export default function CustoAnual({ data }) {
  if (!data.licencasPorAno) return null;

  const licencasPorAno = data.licencasPorAno;

  // Função para obter os 5 anos mais recentes
  const obterAnosMaisRecentes = () => {
    const anos = [...new Set(licencasPorAno.map(item => item.ano))];
    return anos.sort((a, b) => b - a).slice(0, 5);
  };

  // Função para obter os dados de um ano específico
  const obterDadosDoAno = (ano) => {
    return licencasPorAno.filter(item => item.ano === ano).slice(0, 5);
  };

  const anosMaisRecentes = obterAnosMaisRecentes();

  return (
    <Card className="mb-36">
      <Text>Valor das Licenças por Ano</Text>
      <TabGroup>
        <TabList className="mt-8">
          {anosMaisRecentes.map((ano) => (
            <Tab key={ano}>{ano}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {anosMaisRecentes.map((ano) => (
            <TabPanel key={ano}>
              <div className="mt-10">
                {obterDadosDoAno(ano).map((item) => (
                  <div key={item.nome} className="mt-4">
                    <Flex>
                      <Text className="w-full">{item.nome}</Text>
                      <Flex className="space-x-2" justifyContent="end">
                        <Text>{`${item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}</Text>
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
