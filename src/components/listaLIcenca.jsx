"use client";
import React from 'react';
import { Card, Title, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react';

export default function ListaLicenca ( { data }) {
  return (
    <Card>
      <Title>Lsta de Licenca</Title>
      <Table className='mt-5'>
        <TableHead className='bg-tremor-brand-emphasis'>
          <TableRow>
            <TableHeaderCell className="border text-white">ID</TableHeaderCell>
            <TableHeaderCell className="border text-white">Usuário</TableHeaderCell>
            <TableHeaderCell className="border text-white">Licenças</TableHeaderCell>
            <TableHeaderCell className="border text-white">Custo</TableHeaderCell>
            <TableHeaderCell className="border text-white">Data</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-gray-400'>
          {data.map((item, index) => (
            <TableRow key={index} className='hover:bg-tremor-brand-emphasis hover:text-white'>
              <TableCell className="border">{item.Id}</TableCell>
              <TableCell className="border">{item.usuario}</TableCell>
              <TableCell className="border">{item.licencas}</TableCell>
              <TableCell className="border">{"R$ "+item.custo}</TableCell>
              <TableCell className="border">{item.dataHora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Card>
  );
};