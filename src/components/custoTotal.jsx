import React from 'react';
import Container from "./container";

export default function CustoTotal({ props } ) {
    return (
        <Container>
             <div className="bg-white rounded-lg shadow p-4">
                <h1 className="text-2xl font-bold mb-4">Propriedade "teste" recebida:</h1>
                <p>{props}</p>
            </div>
        </Container>
    )
}
