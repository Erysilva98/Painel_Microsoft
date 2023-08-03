"use client";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BadgeDelta, Card, Metric, Text } from '@tremor/react';

export default function NumUsuarios({data}) {

  const numero =`${(data?.quantidadeUsuarios || 0)}`;
  const status = 12 + '%';

  return (
    <Card className="w-80 h-28 hover:shadow-lg">
      <div>
        <div className='flex flex-col'>
        <Text>Usuários</Text>
            <div className='flex flex-row space-x-4'>
                <Metric>{numero}</Metric>
                <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                    {status}
                </BadgeDelta>
            </div>
        </div>
      </div>
    </Card>
  );
}

// Defina os tipos das props utilizando PropTypes
NumUsuarios.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
