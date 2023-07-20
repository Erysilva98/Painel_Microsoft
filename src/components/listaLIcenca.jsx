import React from 'react';
import { Card, Title, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react';

export default function ListaLicenca ( { data }) {

  // Modelo
  // https://www.tremor.so/docs/components/table
  return (
    <Card>
      <Title>Lsta de Licenca</Title>
      <Table className='mt-5'>
        <TableHead className='bg-slate-300'>
          <TableRow >
            <TableHeaderCell>Campus ID</TableHeaderCell>
            <TableHeaderCell>Usuário</TableHeaderCell>
            <TableHeaderCell>Licenças</TableHeaderCell>
            <TableHeaderCell>Custo</TableHeaderCell>
            <TableHeaderCell>Data/Hora</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-emerald-300'>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.campusId}</TableCell>
              <TableCell>{item.usuario}</TableCell>
              <TableCell>{item.licencas}</TableCell>
              <TableCell>{"R$ "+item.custo}</TableCell>
              <TableCell>{item.dataHora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Card>
  );
};