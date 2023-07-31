import React, { useState } from "react";
import { Card, AreaChart, Title } from "@tremor/react";

const dados = [
  {
    Month: "Jan", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Fev", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  { 
    Month: "Mar", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Abr", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mai", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jun", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jul", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Ago", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Set", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Out", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Nov", Year: "2021",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Dez", Year: "2021",
    Atual: 0, Anterior: 0,
  },

  {
    Month: "Jan", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Fev", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mar", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Abr", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mai", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jun", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jul", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Ago", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Set", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Out", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Nov", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Dez", Year: "2022",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jan", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Fev", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mar", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Abr", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mai", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jun", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jul", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Ago", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Set", Year: "2023",
    Atual: 10, Anterior: 0,
  },
  {
    Month: "Out", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Nov", Year: "2023",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Dez", Year: "2023",
    Atual: 0, Anterior: 0,
  },

  //TEste de varios anos
  {
    Month: "Jan", Year: "2024",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Fev", Year: "2024",
    Atual: 0, Anterior: 0,
  },

  {
    Month: "Mar", Year: "2025",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Abr", Year: "2025",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Mai", Year: "2026",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jun", Year: "2026",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Jul", Year: "2027",
    Atual: 0, Anterior: 0,
  },
  {
    Month: "Ago", Year: "2027",
    Atual: 0, Anterior: 0,
  },
];

export default function LicencaMensal() {
  const yearsList = [...new Set(dados.map((item) => item.Year))]; // Lista de anos únicos
  const [selectedYears, setSelectedYears] = useState([yearsList[1], yearsList[2]]); // Anos selecionados por padrão

  // Filtrar os dados com base nos anos selecionados
  const filteredData = dados.filter((item) =>
    selectedYears.includes(item.Year)
  );

  const handleYearButtonClick = (year) => {
    // Verifica se o ano já está selecionado
    if (selectedYears.includes(year)) {
      // Remove o ano da seleção
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      // Adiciona o ano à seleção (no máximo 2 anos)
      setSelectedYears((prevSelectedYears) => {
        if (prevSelectedYears.length >= 2) {
          return [year];
        } else {
          return [...prevSelectedYears, year];
        }
      });
    }
  };

  return (
    <Card>
      <div className="flex items-center mb-4 justify-between">
        <Title>Custo Mensal</Title>
        <div className="space-x-2">
          {yearsList.slice(0, 5).map((year) => (
            <button
              key={year}
              className={`p-2 border rounded ${
                selectedYears.includes(year) ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleYearButtonClick(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <AreaChart
        className="w-full h-60"
        data={filteredData}
        categories={["Atual", "Anterior"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        yAxisWidth={60}
        valueFormatter={(number) =>
          `${Intl.NumberFormat("pt-br").format(number).toString()}`
        }
      />
    </Card>
  );
}