"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BadgeDelta, Card, Metric, Text } from '@tremor/react';

export default function NumUsuarios() {
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
    numero: `${(data?.quantidadeLicencas || 0)}`,
    status: 12 + '%',
  };

  return (
    <Card className="w-80 h-28">
      <div>
        <div className='flex flex-col'>
        <Text>Usuários</Text>
            <div className='flex flex-row space-x-4'>
                <Metric>{dados.numero}</Metric>
                <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                    {dados.status}
                </BadgeDelta>
            </div>
        </div>
      </div>
    </Card>
  );
}
