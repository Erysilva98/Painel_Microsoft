"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Metric, Text, BadgeDelta } from "@tremor/react";

export default function CustoUsuario() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao obter os valores calculados:', error);
            }
        };

        fetchData();
    }, []);

    const dados = {
      numero: `R$ ${(data?.divisaoLicencasPorMedia || 0).toFixed(2)}`,
      status: "moderateDecrease",
      valor: 18.7+'%',
    };
  
    return (
      <Card className="w-80 h-28">
        <div>
          <div className='flex flex-col'>
            <Text>Valor médio por usuário</Text>
            <div className='flex space-x-3'>
              <Metric>{dados.numero}</Metric>
              <BadgeDelta deltaType={dados.status} isIncreasePositive={true} size="xs">
                {dados.valor}
              </BadgeDelta>
            </div>
          </div>
        </div>
      </Card>
    );
  }