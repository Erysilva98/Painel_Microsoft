"use client";
import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
];

export default function QuantLicenca () {
  return (
    <>
        {cities.map((city, index) => (
            <Card key={index}>
                <DonutChart
                className="max-w-2xl max-h-60"
                data={[city]}
                category="sales"
                index="name"
                valueFormatter={(number) =>
                    `$ ${Intl.NumberFormat("pt-br").format(number).toString()}`}
                />
            </Card>
        ))}
    </>
  )
}

