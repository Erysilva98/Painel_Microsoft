import React from 'react';
import PropTypes from 'prop-types';
import { Card, Metric, Text, BadgeDelta } from "@tremor/react";

export default function CustoUsuario( {data} ) {

    const numero =`${(data?.valorMedioPorUsuario || 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    const status = "moderateDecrease";
    const valor = 18.7+'%';
  
    return (
      <Card className="w-80 h-28 hover:shadow-lg">
        <div>
          <div className='flex flex-col'>
            <Text>Valor médio por usuário</Text>
            <div className='flex space-x-3'>
              <Metric>{numero}</Metric>
              <BadgeDelta deltaType={status} isIncreasePositive={true} size="xs">
                {valor}
              </BadgeDelta>
            </div>
          </div>
        </div>
      </Card>
    );
  }

// Defina os tipos das props utilizando PropTypes
CustoUsuario.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};